let button=document.createElement("button");
button.textContent="Press Me";
document.body.insertBefore(button,document.body.firstChild);
let margin=dimensions=0;
margin=`2px`;
dimensions=`10px`;
let input=16;
let num=16;

function creategrid(num,margin,dimensions)
{
    let main_container=document.querySelector("#container");
    main_container.innerHTML='';
    for(let i=0;i<num;i++)
    {
    let container=document.createElement("div");
    container.setAttribute("class","con");
    main_container.appendChild(container);
    }
    
    let container=document.querySelectorAll(".con");
    for(let i=0;i<num;i++)
    {
        let div=document.createElement("div");
        div.style= ` margin:${margin}; height:${dimensions}; width:${dimensions}; background-color:red`;
        container.forEach(con =>
        {
            con.appendChild(div.cloneNode(true));
        }
        )
    }
    container.forEach(con =>
        {
            con.style="display:flex";
        }
        )
        let div=document.querySelectorAll(".con>div");
        div.forEach(div =>
            {
                div.addEventListener("mouseenter", () =>
                {
                    div.style.backgroundColor="green";
                })
            }
            )
}
creategrid(16,'10px','30px');
button.addEventListener("click",() =>
{
    input=prompt("enter one of those dimensions: 5x5 10x10 25x25 50x50 64x64");
    input=parseInt(input);
    if(input>100)
    {
        alert("high input: consider giving numbers less than 100");
    }
    else{
    num=input;
    }
num===5?(margin='7px',dimensions='150px'):
num===10?(margin='15px',dimensions='50px'):
num===16?(margin='10px',dimensions='30px'):
num===25?(margin='5px',dimensions='23px'):
num===50?(margin='3px',dimensions='10px'):
num===64?(margin='2px',dimensions='8.5px'):0;
creategrid(num,margin,dimensions);


})



