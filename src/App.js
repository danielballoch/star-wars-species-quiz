import React, {Component} from 'react';
import './App.css'
import ResultTem from './components/resultTem'

//import images for results section
import Hutt from './images/Hutt.jpg'
import Ewok from './images/Ewok.PNG'
import Gungan from './images/Gungan.PNG'
import MonCalamari from './images/MonCalamari.PNG'
import Neimodian from './images/Neimodian.PNG'
import Sullustan from './images/Sullustan.PNG'
import Toydarian from './images/Toydarian.PNG'
import Trandoshan from './images/Trandoshan.PNG'
import Yoda from './images/yoda.jpg'
import Dug from './images/Dug.PNG'

//set state presets so user can click submit immeditly and bind 'this' so fuctions work.
class App extends Component {
    constructor(){
        super()
        this.state = {
            species: [],
            name: "Luke Skywalker",
            age: "young",
            height: "short",
            hairColor: "blue",
            eyeColor: "blonde",
            result: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetSelection = this.resetSelection.bind(this);
    }

    //function to fetch user data from starwars api and set as state
    getData = async function(){
        const species = await fetch('https://swapi.co/api/species/');
        const data = await species.json();
        const hut = data.results[0];
        data.results.push(hut);
        this.state.species = data.results;
        console.log(data)
    }

    componentDidMount(){
        this.getData();
    }

    //handle change for form inputs, setState as value
    handleChange(event) {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
        console.log(this.state)
        
    }
    //set result based on form data and if statments
    handleSubmit(event) {
        event.preventDefault();
        const state = this.state;
        if (state.name && state.age && state.height && state.hairColor && state.eyeColor){
            if (state.height === "tall"){
                if (state.age === "ancient"){
                    if (state.eyeColor === "yellow" || state.eyeColor === "red" || state.eyeColor === "green" || state.eyeColor === "orange" ){
                        this.setState({result: 10});
                        this.setState({img: Hutt});
                    } else {
                        this.setState({result: 5});
                        this.setState({img: Sullustan});
                    }
                }
                if (state.age === "old"){
                    if (state.eyeColor === "red" || state.eyeColor === "pink" || state.eyeColor === "brown" || state.eyeColor === "black" ){
                        this.setState({result: 6});
                        this.setState({img: Neimodian});
                    } else {
                        this.setState({result: 2});
                        this.setState({img: Trandoshan});
                    }
                }
                if (state.age === "young"){
                    if (state.eyeColor === "red" || state.eyeColor === "orange" || state.eyeColor === "brown" || state.eyeColor === "black" || state.eyeColor === "blue"   ){
                        this.setState({result: 7});
                        this.setState({img: Gungan});
                    } else {
                        this.setState({result: 2});
                        this.setState({img: Trandoshan});
                    }
                }
            }
            else if (state.height === "short"){
                
                if (state.age === "ancient"){
                    if (state.eyeColor === "yellow" || state.eyeColor === "orange" || state.eyeColor === "red" || state.eyeColor === "green"){
                        this.setState({result: 3});
                        this.setState({img: MonCalamari});
                    } else {
                        this.setState({result: 1});
                        this.setState({img: Yoda});
                    }
                }
                if (state.age === "old"){
                    if (state.eyeColor === "yellow" || state.eyeColor === "blue" || state.eyeColor === "pink" || state.eyeColor === "green"){
                        this.setState({result: 9});
                        this.setState({img: Dug});
                    } else {
                        this.setState({result: 4});
                        this.setState({img: Ewok});
                    }
                }
                if (state.age === "young"){
                    if (state.eyeColor === "yellow" || state.eyeColor === "blue" || state.eyeColor === "brown" || state.eyeColor === "green"){
                        this.setState({result: 8});
                        this.setState({img: Toydarian});
                    } else {
                        this.setState({result: 1});
                        this.setState({img: Yoda});
                    }
                }
            }
               
        } else {
            //show alert if data is not filled out yet submit is clicked
            alert("Please select all options")
        }
    }


    //reset state for try again btn
    resetSelection() {
        this.setState({result: undefined})
    }
    
    
    render(){
        //if api data loaded and form has not been completed show quiz section
        if (this.state.species && !this.state.result) {
            return(
                //quiz section
                <div className='wrapper'>
                    <h1>STAR</h1>
                    <h1>WARS</h1>
                    
                    <form>
                    <h2>Species Quiz</h2>
                    <p>Enter your information below to see where you fit in the starwars universe.</p>
                        <label>
                            Name:
                            <input required type="text" name="name" placeholder="Luke Skywalker"  onChange={this.handleChange}/>
                        </label>

                    <div className="optionSection">
                        Age:
                            <div className="btnDiv">
                                <button  name={"age"} value="young" onClick={this.handleChange} className={this.state.age === "young" ? "active" : undefined}>young</button>
                                <button  name={"age"} value="old" onClick={this.handleChange} className={this.state.age === "old" ? "active" : undefined}>old</button>
                                <button  name={"age"} value="ancient" onClick={this.handleChange} className={this.state.age === "ancient" ? "active" : undefined}>ancient</button>
                            </div>
                    </div>            
                    <div className="optionSection">        
                        
                            Height:
                            <div className="btnDiv">
                                <button name={"height"} value="tall"  onClick={this.handleChange} className={this.state.height === "tall" ? "active" : undefined}>tall</button>
                                <button  name={"height"} value="short"  onClick={this.handleChange} className={this.state.height === "short" ? "active" : undefined}>short</button>
                            </div>
                    </div>  

                        <label>
                        Eye Color:
                            <select required name={"eyeColor"} value={this.state.value} onChange={this.handleChange}>
                            
                                <option className="option" value="yellow">Yellow</option>
                                <option value="orange">Orange</option>
                                <option value="green">Green</option>
                                <option selected value="blue">Blue</option>
                                <option value="pink">Pink</option>
                                <option value="red">Red</option>
                                <option value="brown">Brown</option>
                                <option value="black">Black</option>
                            </select>
                        </label>

                        <label>
                        Hair Color:
                            <select required name={"hairColor"} value={this.state.value} onChange={this.handleChange}>
                                <option value="white">White/Grey</option>
                                <option selected value="white">Blonde</option>
                                <option value="red">Red/Orange</option>
                                <option value="brown">Brown</option>
                                <option value="black">Black</option>
                            </select>
                        </label>
                        <input id="input_btn" type="submit" value="Submit" onClick={this.handleSubmit} />

                    </form>
                </div>
            )
        } else if (this.state.result){
           // otherwise, if form is complete and there is a result, show results section. 
            return(
                <ResultTem 
                    Username={this.state.name} 
                    Name={this.state.species[this.state.result].name}
                    Language={this.state.species[this.state.result].language} 
                    Classification={this.state.species[this.state.result].classification} 
                    Designation={this.state.species[this.state.result].designation} 
                    Eyes={this.state.species[this.state.result].eye_colors} 
                    Hair={this.state.species[this.state.result].hair_colors} 
                    Height={this.state.species[this.state.result].average_height} 
                    img={this.state.img} 
                    reset={this.resetSelection}>
                    transition={this.state.transition}
                 </ResultTem>
            )
        } else {
            // otherwise show loading section
            return(
                    <div className='wrapper'>
                        <h1 className="c1 f1">Which Star Wars Species Are you??</h1>
                        <div>loading...</div>     
                    </div> 
                )
        }

        }
    } 
    

export default App;
