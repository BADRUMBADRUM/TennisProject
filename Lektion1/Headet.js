const reactContentRoot = document.getElementById("root");

const MyJSXElement = () => {

    
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
    const test = () =>{
        alert("TEST");
    }
    
    return (
    <div>
        <div>
        <h1 size="+4">TENNIS <img src="Pictures/TennisRacket.png" width="110" height="70"></img></h1>
        </div>  
        <button  className="index1Buttons"  onClick = {() => ClickMenu("banor")}>BANOR</button>
        <button  className="index1Buttons"  onClick = {() => ClickMenu("omkladningsrum")}>OMKLÄDNINGSRUM</button>
        <button  className="index1Buttons" onClick = {() => ClickMenu("bastu")} >BASTU</button>  
    </div>
    );
};


const JSXElement = MyJSXElement;

const root = ReactDOM.createRoot(reactContentRoot);
root.render(<JSXElement />)