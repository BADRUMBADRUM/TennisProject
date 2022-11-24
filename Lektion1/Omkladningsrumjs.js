const banorRoot = document.getElementById("root");

const MyJSXElement = () => {
    return(
        <div>
            <h1 size="+4">BOKA OMKLÄDNINGSRUM</h1>

            <button id="hamburger-icon" className="burger" onClick= {() => DisplayOptions()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            </button>

            <button id="banor" className="index1Buttons" type="button" onClick={() => ClickMenu("banor")}>BANOR</button>
            <button id="omkladningsrum" className="index1Buttons" type="button" onClick={() => ClickMenu("omkladningsrum")}>OMKLÄDNINGSRUM</button>
            <button id="bastu" className="index1Buttons" type="button" onClick={() => ClickMenu("bastu")}>BASTU</button>
            <button id="home" className="index1Buttons" type="button" onClick={() => ClickMenu("home")}>HEM</button>

            <form onSubmit={() => validateForm()}>
                <center>
                    <div className="boking">
                        <label for="fname">Förnamn:</label><br></br>
                        <input type="text" id="fname" name="fname"></input><br></br>
                        <label for="lname">Efternamn:</label><br></br>
                        <input type="text" id="lname" name="lname"></input><br></br>
                        <label for="mdate">Datum:</label><br></br>
                        <input type="date" id="mdate" name="mdate"></input><br></br>
                        <label for="time">Tid:</label><br></br>
                        <select name="time" id="time">
                            <option value="07:00-09:00">07:00-09:00</option>
                            <option value="09:00-11:00">09:00-11:00</option>
                            <option value="11:00-13:00">11:00-13:00</option>
                            <option value="13:00-15:00">13:00-15:00</option>
                            <option value="15:00-17:00">15:00-17:00</option>
                            <option value="17:00-19:00">17:00-19:00</option>
                            <option value="19:00-21:00">19:00-21:00</option>
                        </select><br></br><br></br>
                        <input id="SubmitButton" type="submit" value="Submit"></input>
                    </div>
                </center>
            </form>
        </div>
    )
    
}; 
ReactDOM.render(<MyJSXElement />, banorRoot);

const ClickMenu = (context) =>
{
    if(context === "banor")
    {
        window.location.href = "banor.html";
    }
    else if(context === "omkladningsrum")
    {
        window.location.href = "omkladningsrum.html"
    }
    else if(context === "bastu")
    {
        window.location.href = "bastu.html";
    }
    else if(context === "home")
    {
        window.location.href = "index1.html";
    }
       
}

function validateForm()
{
    let regularName = /^[a-öA-Ö]+$/;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    if(!regularName.test(fname))
    {
        alert("Ogiltigt förnamn");
    }

    if(!regularName.test(lname))
    {
        alert("ogiltigt efternamn");
    }

}

let dateSelected = document.getElementById("mdate");
let dateVariable = new Date();
const dateAsString = dateVariable.getFullYear() + "-" + (dateVariable.getMonth() + 1) + "-" + dateVariable.getDate();
dateSelected.min = dateAsString;
console.log(dateSelected);

function DisplayOptions()
{
    const reactBanorVariable = document.getElementById("banor");
    const reactomkladningsrumVariable = document.getElementById("omkladningsrum");
    const reactbastuVariable = document.getElementById("bastu");
    const reactHomeVariable = document.getElementById("home");
    
    if(reactBanorVariable.style.display === "none" && reactomkladningsrumVariable.style.display === "none" && reactbastuVariable.style.display === "none")
    {
        reactBanorVariable.style.display = "inline-block";
        reactomkladningsrumVariable.style.display = "inline-block";
        reactbastuVariable.style.display = "inline-block";
        reactHomeVariable.style.display = "inline-block"
    }
    else
    {
        reactBanorVariable.style.display = "none";
        reactomkladningsrumVariable.style.display = "none";
        reactbastuVariable.style.display = "none";
        reactHomeVariable.style.display = "none";
    }
}

const mediaQuerryMobile = window.matchMedia("(max-width: 500px)");
mediaQuerryMobile.addEventListener("change", mqHandler);

function mqHandler(e){
    if(e.matches == false)
    {
            const reactBanorVariable = document.getElementById("banor");
            const reactomkladningsrumVariable = document.getElementById("omkladningsrum");
            const reactbastuVariable = document.getElementById("bastu");
            const reactHomeVariable = document.getElementById("home");
        
            reactBanorVariable.style.display = "inline-block";
            reactomkladningsrumVariable.style.display = "inline-block";
            reactbastuVariable.style.display = "inline-block";
            reactHomeVariable.style.display = "inline-block";
    }
}