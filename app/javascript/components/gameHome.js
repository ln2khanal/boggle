import React from 'react';
import axios from 'axios'

import Timer from 'react-compound-timer';


import Rows from './game/rows'
import Score from './game/score'
import Result from './game/result'
import Startup from './game/startup'
import ResultForm from './game/resultForm'

const csrfToken = document.querySelector('[name=csrf-token]').content
axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

class GameHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: '',
            words: [],
            result: {
                list_of_words: []
            },
            dataset: Array(4),
            score: 0,
            started: false,
            timer: true,
            gameDurationSeconds: 120000
        }
    }
    timerReset = (gameEnded) => {
        this.setState({timer: gameEnded !== true})
    }

    changeHandler = event => {
        if (event.target.name === "words"){
            let word = event.target.value
            if ((word).indexOf(' ') > 0) {
                word = word.trim()
                this.setState({
                    words: [...this.state.words, word],
                    word: ''
                })
                this.computeResult()
            }
            else{
                this.setState({word})
            }
        }
    }
    handleReset = event => {
        this.timerReset(false)
        axios.get('getdata')
            .then(response => {
                this.setState({
                    dataset: response.data.data,
                    words: '',
                    score: 0,
                    started:true,
                    result: {
                        list_of_words: []
                    }
                })
            })
            .catch(function (err) {
                console.log(err)
            })
        this.setState({[event.target.name]: event.target.value})
    }

    computeResult = () => {
        axios.post('result', {words: this.state.words})
            .then(response =>{
                this.setState({
                    result: response.data
                })
            })
            .catch(function (error) {
                console.log(error)
            })
        }

    render() {
        if (this.state.started){
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <Rows items={this.state.dataset} />
                        <div className='row'>
                            <div className='col-8'>
                                <ResultForm
                                    changeHandler={this.changeHandler}
                                    resetHandler={this.handleReset}
                                    currentValue={this.state.word}
                                    formDisabled={!this.state.timer}
                                />
                            </div>
                            <div className='col-4'>
                                <div className='row'>
                                    <div className='col'>
                                        <div className='row'>
                                            <div className='col score'>
                                                <React.Fragment>
                                                    <Score result={this.state.result} />
                                                </React.Fragment>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col timer-time'>
                                            {
                                                this.state.timer ?
                                                <Timer
                                                    initialTime={this.state.gameDurationSeconds}
                                                    lastUnit="s"
                                                    direction="backward"
                                                    checkpoints={[
                                                        {
                                                            time: 0,
                                                            callback: () => this.timerReset(true),
                                                        }
                                                    ]}
                                                >
                                                    {() => (
                                                        <React.Fragment>
                                                            <Timer.Seconds/>s
                                                        </React.Fragment>
                                                    )}
                                                </Timer>
                                                : <button type="button" className="btn btn-danger btn-block"
                                                      onClick={this.handleReset}>Restart Game</button>
                                            }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <Result result={this.state.result}/>
                    </div>
                </div>
                <hr/>
            </div>
        )}
        else{
            return (
                <Startup initiator={this.handleReset} />
            )
        }
    }
}
export default GameHome