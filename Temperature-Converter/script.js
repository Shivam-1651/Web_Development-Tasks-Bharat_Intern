const calculateTemp = () =>{
     const number=document.getElementById('temp').value;
     const tempselected = document.getElementById('temp_diff');
     const valueTemp=temp_diff.options[tempselected.selectedIndex].value; 
    const celToFah = (cel) =>{
        let fahr = Math.round((cel*9/5)+32);
        return fahr;  
    }
    const FahTocel = (fahr) =>{
        let cel = Math.round((fahr -32)*5/9);
        return cel;  
    }
    let result;
    if(valueTemp == 'cel')
    {
        result=celToFah(number);
        document.getElementById('resultContainer').innerHTML= `= ${result}°Fahrenheit`;
    }
    else
    {
        result=FahTocel(number);
        document.getElementById('resultContainer').innerHTML=`= ${result}°Celsius`;
    }
}