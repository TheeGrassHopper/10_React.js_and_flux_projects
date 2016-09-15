import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';


class App extends Component{
	constructor(props){
		super(props);
		this.state= {
			questions:[
				{
					id: 1,
					text: 'Which war was fought between the north and the south regions of the United States?',
					choices: [
						{	
							id: 'a',
							text: 'Civil War'
						},
						{	
							id: 'b',
							text: 'Mexican War'
						},
						{	
							id: 'c',
							text: 'World War I'
						},
						{	
							id: 'd',
							text: 'World War II'
						}
					],
					correct: 'a'
				},
				{
					id: 2,
					text: 'This was the president of the Confederate states during the U.S. Civil War?',
					choices: [
						{	
							id: 'a',
							text: 'George Washington'
						},
						{	
							id: 'b',
							text: 'Jefferson Davis'
						},
						{	
							id: 'c',
							text: 'John Adams'
						},
						{	
							id: 'd',
							text: 'Abraham Lincoln'
						}
					],
					correct: 'b'
				},
				{
					id: 3,
					text: 'The election of Abraham Lincoln and the south having the right to secede were the two causes of what major event?',
					choices: [
						{	
							id: 'a',
							text: 'Declaration of Independence'
						},
						{	
							id: 'b',
							text: 'U.S. Civil War'
						},
						{	
							id: 'c',
							text: 'Stock Market crashing'
						},
						{	
							id: 'd',
							text: 'none of the above'
						}
					],
					correct: 'b'
				},
				{
					id: 4,
					text: 'These two states gave some land to create Washington D.C?',
					choices: [
						{	
							id: 'a',
							text: 'Virginia and New York'
						},
						{	
							id: 'b',
							text: 'Connecticut and Virginia'
						},
						{	
							id: 'c',
							text: 'New York and Maryland'
						},
						{	
							id: 'd',
							text: 'Maryland and Virginia'
						}
					],
					correct: 'd'
				},

				{
					id: 5,
					text: 'What was Reconstruction?',
					choices: [
						{	
							id: 'a',
							text: ' bringing the 11 Confederate states back into the Union'
						},
						{	
							id: 'b',
							text: 'rebuilding North America'
						},
						{	
							id: 'c',
							text: 'rebuilding Mexico'
						},
						{	
							id: 'd',
							text: 'None of the above'
						}
					],
					correct: 'a'
				}
			],
			score: 0,
			current: 1
		}
	}


	 setCurrent(current) {
    this.setState({current});
  }

  setScore(score) {
    this.setState({score});
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = <Results {...this.state} />;
    } else {
      var scorebox = <Scorebox {...this.state} />;
    }

    return (
      <div>
        {scorebox}
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
      </div>
    )
  }
}

export default App;