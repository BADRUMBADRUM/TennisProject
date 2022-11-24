/*
function CheckBastuInput()
{
    let FNameValue = document.getElementById('fname').value;
    let LNameValue = document.getElementById('lname').value;
    let BokningsTid = document.getElementById('bokningstid').value;     
    let HoursToBook;
    let KonForBastu;
    if(FNameValue == "")
    {
        alert('Skriv in ditt förnamn');
    }
    if(LNameValue == "")
    {
        alert('Skriv in ditt efternamn');
    }
    if(BokningsTid == "")
    {
        alert("Välj tid att basta");
    }

    if(document.getElementById('1timmar').checked == true)
    {
        HoursToBook = document.getElementById('1timmar').value;
    }
    else if(document.getElementById('2timmar').checked == true)
    {
        HoursToBook = document.getElementById('2timmar').value;
    }
    else if(document.getElementById('3timmar').checked == true)
    {
        HoursToBook = document.getElementById('3timmar').value;
    }
    else
    {
        alert('Välj timmar att basta')
    }

    if(document.getElementById('man').checked == true)
    {
        KonForBastu = document.getElementById('man').value;
    }
    else if(document.getElementById('kvinna').checked == true)
    {
        KonForBastu = document.getElementById('kvinna').value;
    }
    else
    {
        alert('välj kön');
    }

    alert(FNameValue + " " + LNameValue + " " + BokningsTid + " " + HoursToBook + " " + KonForBastu);
}
function DisplayOptions()
{
    const reactBanorVariable = document.getElementById("banor");
    const reactomkladningsrumVariable = document.getElementById("omkladningsrum");
    const reactbastuVariable = document.getElementById("bastu");
    
    if(reactBanorVariable.style.display === "none" && reactomkladningsrumVariable.style.display === "none" && reactbastuVariable.style.display === "none")
    {
        reactBanorVariable.style.display = "inline-block";
        reactomkladningsrumVariable.style.display = "inline-block";
        reactbastuVariable.style.display = "inline-block";
    }
    else
    {
        reactBanorVariable.style.display = "none";
        reactomkladningsrumVariable.style.display = "none";
        reactbastuVariable.style.display = "none";
    }

}

ReactDOM.render(DisplayOptions());
*/


/*
const hamburgerBtn = document.getElementById("hamburger-icon");
const reactBanorVariable = document.getElementById("banor");
const reactomkladningsrumVariable = document.getElementById("omkladningsrum");
const reactbastuVariable = document.getElementById("bastu");

hamburgerBtn.addEventListener("click", () =>{
    if(reactBanorVariable.style.display === "none" && reactomkladningsrumVariable.style.display === "none" && reactbastuVariable.style.display === "none")
    {
        reactBanorVariable.style.display = "inline-block";
        reactomkladningsrumVariable.style.display = "inline-block";
        reactbastuVariable.style.display = "inline-block";
    }
    else
    {
        reactBanorVariable.style.display = "none";
        reactomkladningsrumVariable.style.display = "none";
        reactbastuVariable.style.display = "none";
    }

})
*/

const reactContentRoot = document.getElementById("root");

const MyJSXElement = () => {
    
    return (
    <div>
        <div>
        <h1 size="+4">TENNIS <img src="Pictures/TennisRacket.png" width="110" height="70"></img></h1>
        </div>  
        <button id="hamburger-icon" className="burger" onClick= {() => DisplayOptions()}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </button>
        <button id="banor" className="index1Buttons"  onClick = {() => ClickMenu("banor")}>BANOR</button>
        <button id="omkladningsrum" className="index1Buttons"  onClick = {() => ClickMenu("omkladningsrum")}>OMKLÄDNINGSRUM</button>
        <button id="bastu" className="index1Buttons" onClick = {() => ClickMenu("bastu")} >BASTU</button>  
    </div>
    );
};

const mediaQuerryMobile = window.matchMedia("(max-width: 500px)");
mediaQuerryMobile.addEventListener("change", mqHandler);

function mqHandler(e){
    if(e.matches == false)
    {
            const reactBanorVariable = document.getElementById("banor");
            const reactomkladningsrumVariable = document.getElementById("omkladningsrum");
            const reactbastuVariable = document.getElementById("bastu");
        
            reactBanorVariable.style.display = "inline-block";
            reactomkladningsrumVariable.style.display = "inline-block";
            reactbastuVariable.style.display = "inline-block";
          
    }
}


function DisplayOptions()
{
    const reactBanorVariable = document.getElementById("banor");
    const reactomkladningsrumVariable = document.getElementById("omkladningsrum");
    const reactbastuVariable = document.getElementById("bastu");
    
    if(reactBanorVariable.style.display === "none" && reactomkladningsrumVariable.style.display === "none" && reactbastuVariable.style.display === "none")
    {
        reactBanorVariable.style.display = "inline-block";
        reactomkladningsrumVariable.style.display = "inline-block";
        reactbastuVariable.style.display = "inline-block";
    }
    else
    {
        reactBanorVariable.style.display = "none";
        reactomkladningsrumVariable.style.display = "none";
        reactbastuVariable.style.display = "none";
    }
}

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
       
    }


const JSXElement = MyJSXElement;

ReactDOM.render(<JSXElement />, reactContentRoot)