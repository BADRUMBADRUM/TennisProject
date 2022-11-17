function CheckBastuInput()
{
    var FNameValue = document.getElementById('fname').value;
    var LNameValue = document.getElementById('lname').value;
    var BokningsTid = document.getElementById('bokningstid').value;     
    var HoursToBook;
    var KonForBastu;
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