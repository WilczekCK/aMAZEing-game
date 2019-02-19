// z-index 0 - for hiding elements (?) DOES NOT EXSIST NOW
// z-index 1 - for deadPlace
// z-index 2 - for placeToGame
// z-index 3 - for startPosition
// z-index 4 - for loseScreen;

const menuWindow = document.querySelector("#menu");
const gameWindow = document.querySelector("#game");


myAudio = new Audio('ost.mp3', 'ost.ogg', 'ost.wav'); 
myAudio.volume = '0.4';
myAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
myAudio.play();

//start of dom
document.addEventListener("DOMContentLoaded", function(){ 
    
changeWindow('menu');   //for now 
function changeWindow(type){
    if(type == 'game'){
        menuWindow.style.display = "none";
        gameWindow.style.display = "block";
        gameStart(1);
    }else if(type == 'menu'){
        gameWindow.style.display = "none";
        menuWindow.style.display = "block";
        const logoMenu = document.createElement("div");
              logoMenu.style.backgroundImage = 'url(img/logo.png)';
              logoMenu.style.width = "650px";
              logoMenu.style.height = "650px";
              logoMenu.style.marginLeft = "-170px";
              logoMenu.style.marginTop = "-160px";
              logoMenu.style.animation = 'logo 4s infinite linear';
              logoMenu.style.position = "absolute";
              logoMenu.style.backgroundRepeat ="no-repeat";
              menuWindow.appendChild(logoMenu);
        
        const logoTitle = document.createElement('h1');
              logoTitle.innerHTML = "a<span style='animation:shine 3s infinite linear'>MAZE</span>ing Game";
              logoTitle.style.position = "absolute";
              logoTitle.style.marginLeft = "270px";
              logoTitle.style.fontFamily = "firstplay";
              logoTitle.style.fontSize = "36px";
              logoTitle.style.marginTop = "90px";
              menuWindow.appendChild(logoTitle);
    
    
            const descTitle = document.createElement('h1');
              descTitle.innerHTML = "SIMPLE MAZE GAME";
              descTitle.style.position = "absolute";
              descTitle.style.marginLeft = "280px";
              descTitle.style.fontFamily = "firstplay";
              descTitle.style.fontSize = "12px";
              descTitle.style.marginTop = "130px";
              menuWindow.appendChild(descTitle);
        
        
            const miniInfo = document.createElement('span');
                  miniInfo.innerHTML = "Version 0.9 | 2018"
                  //0.6 added menu + music
                  //0.7 added level 4, fixed music for other browsers
                  //scailing for other resolutions
                  //0.8 changed level 3 to 5
                  //created level 3 and changed difficulty of level 1
                  //another fixes with music
                  //0.9 BOSS :D
                  miniInfo.style.marginLeft = "670px";
                  miniInfo.style.fontWeight = "600";
                  miniInfo.style.marginTop = "480px";
                  miniInfo.style.position = "absolute";
                  menuWindow.appendChild(miniInfo);
        
        
            const startButton = document.createElement('button');
              startButton.innerHTML = "NEW GAME";
              startButton.style.position = "absolute";
              startButton.style.marginLeft = "275px";
              startButton.style.fontFamily = "firstplay";
              startButton.style.fontSize = "20px";
              startButton.style.padding = "8px";
              startButton.style.marginTop = "200px";
              menuWindow.appendChild(startButton);
        
              startButton.addEventListener('click', function(){
                  cleanMenuWindow();
                  changeWindow('game');
                  gameStart(1);
              })
        
        
            const selectLevel = document.createElement('button');
              selectLevel.innerHTML = "SELECT LEVEL";
              selectLevel.style.position = "absolute";
              selectLevel.style.marginLeft = "480px";
              selectLevel.style.fontFamily = "firstplay";
              selectLevel.style.fontSize = "20px";
              selectLevel.style.padding = "8px";
              selectLevel.style.marginTop = "200px";
              menuWindow.appendChild(selectLevel);
        
        
         selectLevel.addEventListener('click', function(){
            const blockClicking = document.createElement('div');
                  blockClicking.style.width = "800px";
                  blockClicking.style.height = "600px";
                  blockClicking.style.position = "absolute";
                  menuWindow.appendChild(blockClicking);

             
        const guiWindow = document.createElement('div');
            guiWindow.style.height = "250px";
            guiWindow.style.width = "400px";
            guiWindow.style.position = "absolute";
            guiWindow.style.background = "rgba(0,0,0,0.6)";
            guiWindow.style.marginTop = "120px";
            guiWindow.style.marginLeft = "200px";
            blockClicking.appendChild(guiWindow);
        
                const exitGui = document.createElement('span');
              exitGui.style.position = "absolute";
              exitGui.innerHTML = 'X';
              exitGui.style.fontFamily = "firstplay";
              exitGui.style.fontSize = "28px";
              exitGui.style.color = "red";
              exitGui.style.marginTop = '50px';
              exitGui.style.marginLeft = "370px";
              exitGui.style.cursor = "pointer";
              guiWindow.appendChild(exitGui);
            
            exitGui.addEventListener('click', function(){
                 blockClicking.parentNode.removeChild(blockClicking);
                 guiWindow.parentNode.removeChild(guiWindow);
            })     
             
             
        const buttonOne = document.createElement('button');
                   buttonOne.classList.add('levels');
                   buttonOne.innerHTML = "Level One";
                   buttonOne.style.margin = "15px";
                   buttonOne.style.fontFamily = "firstplay";
                   buttonOne.style.padding = "8px";
                   buttonOne.style.fontSize = "10px";
                   guiWindow.appendChild(buttonOne);
             
             buttonOne.addEventListener('click', function(){
                  cleanMenuWindow();
                  changeWindow('game');
                  cleanPreviousLevel();
                  gameStart(1);
             })
             
        const buttonTwo = document.createElement('button');
                   buttonTwo.classList.add('levels');
                   buttonTwo.innerHTML = "Level Two";
                   buttonTwo.style.margin = "2px";
                   buttonTwo.style.padding = "8px";
                   buttonTwo.style.fontFamily = "firstplay";
                   buttonTwo.style.fontSize = "10px";
                   guiWindow.appendChild(buttonTwo);
        
        buttonTwo.addEventListener('click', function(){
                    cleanMenuWindow();     
                    changeWindow('game');
                    cleanPreviousLevel();
                    gameStart(2);
        })
             
        const buttonThree = document.createElement('button');
                   buttonThree.classList.add('levels');
                   buttonThree.innerHTML = "Level Three";
                   buttonThree.style.margin = "10px";
                   buttonThree.style.fontFamily = "firstplay";
                   buttonThree.style.padding = "8px";
                   buttonThree.style.fontSize = "10px";
                   guiWindow.appendChild(buttonThree);
             
        buttonThree.addEventListener('click', function(){
                  cleanMenuWindow();
                  changeWindow('game');
                  cleanPreviousLevel();
                  gameStart(3);
        })     
         
        
        const buttonFour = document.createElement('button');
                   buttonFour.classList.add('levels');
                   buttonFour.innerHTML = "Level Four";
                   buttonFour.style.marginTop = "15px";
                   buttonFour.style.marginLeft = "60px";
                   buttonFour.style.fontFamily = "firstplay";
                   buttonFour.style.padding = "8px";
                   buttonFour.style.fontSize = "10px";
                   guiWindow.appendChild(buttonFour);
             
        buttonFour.addEventListener('click', function(){
                  cleanMenuWindow();
                  changeWindow('game');
                  cleanPreviousLevel();
                  gameStart(4);
        })     
              
        
        const buttonFive = document.createElement('button');
                   buttonFive.classList.add('levels');
                   buttonFive.innerHTML = "Level Five";
                   buttonFive.style.marginTop = "15px";
                   buttonFive.style.marginLeft = "50px";
                   buttonFive.style.fontFamily = "firstplay";
                   buttonFive.style.padding = "8px";
                   buttonFive.style.fontSize = "10px";
                   guiWindow.appendChild(buttonFive);
             
        buttonFive.addEventListener('click', function(){
                  cleanMenuWindow();
                  changeWindow('game');
                  cleanPreviousLevel();
                  gameStart(5);
        })          
             
        const buttonSix = document.createElement('button');
                   buttonSix.classList.add('levels');
                   buttonSix.innerHTML = "SPECIAL BOSS STAGE";
                   buttonSix.style.marginTop = "40px";
                   buttonSix.style.marginLeft = "20px";
                   buttonSix.style.fontFamily = "firstplay";
                   buttonSix.style.padding = "15px";
                   buttonSix.style.fontSize = "18px";
                   guiWindow.appendChild(buttonSix);
             
            buttonSix.addEventListener('click', function(){
                  cleanMenuWindow();
                  changeWindow('game');
                  cleanPreviousLevel();
                  gameStart(6);
        }) 
             
         })
          
         const creditsButton = document.createElement('button');
              creditsButton.innerHTML = "CREDITS";
              creditsButton.style.position = "absolute";
              creditsButton.style.marginLeft = "580px";
              creditsButton.style.fontFamily = "firstplay";
              creditsButton.style.fontSize = "20px";
              creditsButton.style.padding = "8px";
              creditsButton.style.marginTop = "250px";
              menuWindow.appendChild(creditsButton);
        
        creditsButton.addEventListener('click', function(){
        const blockClicking = document.createElement('div');
                  blockClicking.style.width = "800px";
                  blockClicking.style.height = "600px";
                  blockClicking.style.position = "absolute";
                  menuWindow.appendChild(blockClicking);

             
        const guiWindow = document.createElement('div');
            guiWindow.style.height = "250px";
            guiWindow.style.width = "400px";
            guiWindow.style.position = "absolute";
            guiWindow.style.background = "rgba(0,0,0,0.6)";
            guiWindow.style.marginTop = "120px";
            guiWindow.style.marginLeft = "200px";
            guiWindow.style.padding = "25px";
            blockClicking.appendChild(guiWindow);
            
        const textGameDev = document.createElement('span');
             textGameDev.innerHTML = "Game Creator: Wilk Paweł";
             textGameDev.style.color = "white";
             textGameDev.style.marginTop = "50px";
             textGameDev.style.fontWeight = "600";
             guiWindow.appendChild(textGameDev);
            
        const graphicSource = document.createElement('span');
             graphicSource.innerHTML = "<br>Graphic source: <a href='https://pixabay.com/' style='color:red !important'>https://pixabay.com/</a><br><a href='https://www.transparenttextures.com/' style='color:red !important'>https://www.transparenttextures.com/</a> ";
             graphicSource.style.color = "white";
             graphicSource.style.marginTop = "50px";
             graphicSource.style.fontWeight = "600";
             guiWindow.appendChild(graphicSource);
            
        const musicSource = document.createElement('span');
             musicSource.innerHTML = "<br>Music source: <a href='https://www.bensound.com' style='color:red !important'>https://www.bensound.com</a>";
             musicSource.style.color = "white";
             musicSource.style.marginTop = "50px";
             musicSource.style.fontWeight = "600";
             guiWindow.appendChild(musicSource);
            
            
        const specialThanks = document.createElement('span');
             specialThanks.innerHTML = "<br><br><font size='5'>Special thanks goes to:</font><br><br>- Artur W. - <font color='red'>For teaching me a lot of things </font> <br>- Michał T. - <font color='red'>Beta Testing</font><br>- Dawid S. - <font color='red'>Beta Testing</font><br><br>It's just a beginning of the beautiful way of programming ^.^<br>";
             specialThanks.style.color = "white";
             specialThanks.style.marginTop = "50px";
             specialThanks.style.fontWeight = "600";
             guiWindow.appendChild(specialThanks);    
             
            
        const exitGui = document.createElement('span');
              exitGui.style.position = "absolute";
              exitGui.innerHTML = 'X';
              exitGui.style.fontFamily = "firstplay";
              exitGui.style.fontSize = "28px";
              exitGui.style.color = "red";
              exitGui.style.marginTop = '-240px';
              exitGui.style.marginLeft = "370px";
              exitGui.style.cursor = "pointer";
              guiWindow.appendChild(exitGui);
            
            exitGui.addEventListener('click', function(){
                 blockClicking.parentNode.removeChild(blockClicking);
                 guiWindow.parentNode.removeChild(guiWindow);
            })
            
        })
        
        
    }
}
        
function cleanMenuWindow(){
    while (menuWindow.firstChild) {
        menuWindow.removeChild(menuWindow.firstChild);
    }   
}       
    
function cleanPreviousLevel(){
    while (gameWindow.firstChild) {
        gameWindow.removeChild(gameWindow.firstChild);
    }   
}            

function finishPlace(level, height, width, left, top, right, rotate){
  //function of the place, where level finish
    //parameter height = height of element in px
    //parameter width = width of element in px
    //left,top,right are the margins
    //and level is just level
    
    const finalPlace = document.createElement('div');
        finalPlace.classList.add('finish');
        finalPlace.style.width = width+'px';
        finalPlace.style.height = height+'px';
        finalPlace.style.marginLeft = left+'px';
        finalPlace.style.marginTop = top+'px';
        finalPlace.style.marginRight = right+'px';
        finalPlace.style.background = "green";
        finalPlace.style.position = "absolute";
        finalPlace.style.zIndex = '2';
        finalPlace.style.transform = "rotate("+rotate+"deg)";
        gameWindow.appendChild(finalPlace);
    
        finalPlace.addEventListener('mouseover', function(){
            ++level;
            cleanPreviousLevel();
            gameStart(level);
        });
}    

function deadPlace(level){
    const deadZone = document.createElement('div');
          deadZone.classList.add('deadZone');
          deadZone.style.zIndex = '1';
          deadZone.style.height = "500px";
          deadZone.style.width = "800px";
          deadZone.style.position = "absolute";
    
          gameWindow.appendChild(deadZone);
            deadZone.addEventListener('mouseover', function(){
                loseScreen(level);
            });
         
};    

function loseScreen(level){
    const screenFluid = document.createElement('div');
          screenFluid.classList.add("loseScreen");
          screenFluid.style.width = "800px";
          screenFluid.style.height = "500px";
          screenFluid.style.background = "rgba(0,0,0,0.3)";
          screenFluid.style.zIndex = '4';
          screenFluid.style.float = 'left';
          screenFluid.style.position = 'absolute';
          gameWindow.appendChild(screenFluid);
    
    const screenContent = document.createElement('div');
          screenContent.style.width = "400px";
          screenContent.style.height = "250px";
          screenContent.style.margin = "0 auto";
          screenContent.style.marginTop = "150px";
          screenContent.style.background = "rgba(0,0,0,0.5)";
          screenFluid.appendChild(screenContent);
    
    const screenText = document.createElement('h3');
          screenText.innerHTML = "You have failed at level "+level;
          screenText.style.fontFamily = "firstplay";
          screenText.style.color = "white";
          screenText.style.textAlign = "center";
          screenText.style.padding = "25px";
          screenContent.appendChild(screenText);
    
    
    const retryButton = document.createElement('button');
          retryButton.innerHTML = "Retry level "+level;
          retryButton.style.fontFamily = "firstplay";
          retryButton.style.color = "white";
          retryButton.style.textAlign = "center";
          retryButton.style.marginLeft = "100px";
          retryButton.style.padding = "10px";
          screenContent.appendChild(retryButton);  
    
    retryButton.addEventListener('click', function(){
        cleanPreviousLevel();
        gameStart(level);
    })
    
    
    const leaveButton = document.createElement('button');
          leaveButton.innerHTML = "Exit game"
          leaveButton.style.fontFamily = "firstplay";
          leaveButton.style.color = "white";
          leaveButton.style.textAlign = "center";
          leaveButton.style.marginLeft = "130px";
          leaveButton.style.padding = "10px";
          screenContent.appendChild(leaveButton); 
    
    leaveButton.addEventListener('click', function(){
        cleanPreviousLevel();
        changeWindow('menu');
    })
    
}
    
function startPosition(level, left, top, right){
    const stopGame = document.createElement('div');
          stopGame.classList.add('stopGame');
          stopGame.style.width = "800px";
          stopGame.style.height = "500px";
          stopGame.style.background = "rgba(0,0,0,0.3)";
          stopGame.style.zIndex = '3';
          stopGame.style.float = 'left';
          stopGame.style.position = 'absolute';
          gameWindow.appendChild(stopGame);
    let thisGame = stopGame;
    
    
    const startGame = document.createElement('div');
          startGame.classList.add('resumeGame');
          startGame.style.marginLeft = left+"px";
          startGame.style.marginRight = right+"px";
          startGame.style.marginTop = top+"px";
          startGame.style.zIndex = '3';
          startGame.style.height = "35px";
          startGame.style.width = "35px";
          startGame.style.border = "black 2px solid";
          startGame.style.animation = "changeColor 1s infinite";
          startGame.style.background = 'orange';
          stopGame.appendChild(startGame);

    
        startGame.addEventListener('mouseover', function(){
            gameWindow.removeChild(stopGame);
            
            function movingWalls(width, height, left, top, speed, rotate, late){
            const movingWalls = document.createElement('div');
              movingWalls.classList.add('movingWalls');
              movingWalls.classList.add('deadZoneNoShadow');
              movingWalls.style.boxShadow = "0 !important";
              movingWalls.style.width = width+"px";
              movingWalls.style.height = height+"px";
              movingWalls.style.marginLeft = left+"px";
              movingWalls.style.marginTop = top+"px";
              movingWalls.style.transform = "rotate("+rotate+"deg)";
              movingWalls.style.position = "absolute";
              movingWalls.style.transtionDelay = late+'s';
              movingWalls.style.animation = "movingWalls "+speed+"s infinite "+late+'s linear';

              movingWalls.style.zIndex = "3";
              gameWindow.appendChild(movingWalls);
            
              movingWalls.addEventListener('mouseover', function(){
                  loseScreen(level);
              })
    }
            function movingWallsHeight(width, height, left, top, speed, rotate, late){
            const movingWallsHeight = document.createElement('div');
              movingWallsHeight.classList.add('movingWallsHeight');
              movingWallsHeight.classList.add('deadZoneNoShadow');
              movingWallsHeight.style.boxShadow = "0 !important";
              movingWallsHeight.style.width = width+"px";
              movingWallsHeight.style.height = height+"px";
              movingWallsHeight.style.marginLeft = left+"px";
              movingWallsHeight.style.marginTop = top+"px";
              movingWallsHeight.style.transform = "rotate("+rotate+"deg)";
              movingWallsHeight.style.position = "absolute";
              movingWallsHeight.style.transtionDelay = late+'s';
              movingWallsHeight.style.animation = "movingWallsHeight "+speed+"s infinite "+late+'s linear';

              movingWallsHeight.style.zIndex = "2";
              gameWindow.appendChild(movingWallsHeight);
            
              movingWallsHeight.addEventListener('mouseover', function(){
                  loseScreen(level);
              })
    }
            
            //this function is only for this level 4 debug
            
            if(level == 4){
                movingWalls(425,50,25,45,14,0,0);
                movingWallsHeight(50,400,400,45,13,0,0);
                
            }
        });
};
    
function gameStart(level){
    gameWindow.dataset.level = level;
    if(level == 1){  
        deadPlace(level);
        pathToWin(level);
        startPosition(level, 380, 430, 0);     //where player start
        finishPlace(level, 50, 800, 0, 0, 0);   //win
    }else if(level == 2){  
        deadPlace(level);
        pathToWin(level);
        startPosition(level, 30, 100, 0); //where player start
        finishPlace(level, 20, 76, 100, 365, 0, 65); //win
    }else if(level == 3){  
        deadPlace(level);
        pathToWin(level);
        startPosition(level, 380, 240, 0); //where player start
        finishPlace(level, 21, 76, 148.5, 279, 0, 90);
    }else if(level == 4){
        deadPlace(level);
        pathToWin(level);
        startPosition(level, 50, 50, 0); //where player start
    }else if(level == 5){
        deadPlace(level);
        pathToWin(level);
        startPosition(level, 30, 50, 0); //where player start
    }else if(level == 6){
        //bossStage
        deadPlace(level);
        pathToWin(level);
        startPosition(level, 400, 100, 0); //where player start
    }else if(level == 7){
        cleanPreviousLevel();
        changeWindow('menu');
    }
}
     
function unlockFinishPlace(level, topOne, leftOne, topTwo, leftTwo, topThree, leftThree, heightWin, widthWin, leftWin, topWin, topRotate){
          
         let pointsToWin = 0;  
    
        const pointElementOne = document.createElement('div');
            pointElementOne.style.width = "10px";
            pointElementOne.style.height = "10px";
            pointElementOne.style.background = "gold";
            pointElementOne.style.position = "absolute";
            pointElementOne.style.zIndex = '3';
            pointElementOne.style.marginTop = topOne+"px";
            pointElementOne.style.marginLeft = leftOne+"px";
            pointElementOne.classList.add('pointElement');
            gameWindow.appendChild(pointElementOne);
    
        const pointElementTwo = document.createElement('div');
            pointElementTwo.style.width = "10px";
            pointElementTwo.style.height = "10px";
            pointElementTwo.style.background = "gold";
            pointElementTwo.style.position = "absolute";
            pointElementTwo.style.zIndex = '3';
            pointElementTwo.style.marginTop = topTwo+"px";
            pointElementTwo.style.marginLeft = leftTwo+"px";
            pointElementTwo.classList.add('pointElement');
            gameWindow.appendChild(pointElementTwo);
    
    
        const pointElementThree = document.createElement('div');
            pointElementThree.style.width = "10px";
            pointElementThree.style.height = "10px";
            pointElementThree.style.background = "gold";
            pointElementThree.style.position = "absolute";
            pointElementThree.style.zIndex = '3';
            pointElementThree.style.marginTop = topThree+"px";
            pointElementThree.style.marginLeft = leftThree+"px";
            pointElementThree.classList.add('pointElement');
            gameWindow.appendChild(pointElementThree);

    
    pointElementOne.addEventListener('mouseover', function(){
        pointsToWin++;
        console.log(pointsToWin);
        gameWindow.removeChild(pointElementOne);
    
    if(pointsToWin == 3){
       return finishPlace(level, heightWin, widthWin, leftWin, topWin,0, topRotate); //win
    }
        
    })
    
    
    pointElementTwo.addEventListener('mouseover', function(){
        pointsToWin++;
        console.log(pointsToWin);
        gameWindow.removeChild(pointElementTwo);
    
    if(pointsToWin == 3){
       return finishPlace(level, heightWin, widthWin, leftWin, topWin, topRotate); //win
    }
        
    })
    
    
    pointElementThree.addEventListener('mouseover', function(){
        pointsToWin++;
        console.log(pointsToWin);
        gameWindow.removeChild(pointElementThree);
    
    if(pointsToWin == 3){
       return finishPlace(level, heightWin, widthWin,  leftWin, topWin, topRotate); //win
    }
        
    })
    

}    
    
    
    
    
//levels 
function pathToWin(level){
    
        //elements
    function straightLine(width, height, left, top, rotate){
        const line = document.createElement('div');
              line.classList.add('straightLine');
              line.classList.add('path');
              line.style.width = width+"px";
              line.style.height = height+"px";
              line.style.marginLeft = left+"px";
              line.style.transform = "rotate("+rotate+"deg)";
              line.style.marginTop = top+"px";
              line.style.background = "aliceblue";
              line.style.position ="absolute";
              line.style.zIndex = "2";
              gameWindow.appendChild(line);
    } 
    function spinCircle(width, height, left, top, speed){
        const spinCircle = document.createElement('div');
              spinCircle.classList.add('spinCircle');
              spinCircle.classList.add('path');
              spinCircle.style.width = width+"px";
              spinCircle.style.height = height+"px";
              spinCircle.style.marginLeft = left+"px";
              spinCircle.style.animation = "spin "+speed+"s infinite linear";
              spinCircle.style.marginTop = top+"px";
              spinCircle.style.background = "black";
              spinCircle.style.position ="absolute";
              spinCircle.style.zIndex = "2";
              gameWindow.appendChild(spinCircle);
        
              spinCircle.addEventListener('mouseover', function(){
                  loseScreen(level);
              })
    }
    function spinCircleReverse(width, height, left, top, speed){
        const spinCircle = document.createElement('div');
              spinCircle.classList.add('spinCircle');
              spinCircle.classList.add('path');
              spinCircle.style.width = width+"px";
              spinCircle.style.height = height+"px";
              spinCircle.style.marginLeft = left+"px";
              spinCircle.style.animation = "spinReverse "+speed+"s infinite linear";
              spinCircle.style.marginTop = top+"px";
              spinCircle.style.background = "black";
              spinCircle.style.position ="absolute";
              spinCircle.style.zIndex = "2";
              gameWindow.appendChild(spinCircle);
        
              spinCircle.addEventListener('mouseover', function(){
                  loseScreen(level);
              })
    }
    function box(width, height, left, top, speed, rotate){
            const box = document.createElement('div');
              box.classList.add('pin');
              box.style.width = width+"px";
              box.style.height = height+"px";
              box.style.marginLeft = left+"px";
              box.style.marginTop = top+"px";
              box.style.opacity = ".7";
              box.style.transform = "rotate("+rotate+"deg)";
              box.style.position ="absolute";
              box.style.background = "#8080ff";
              box.style.boxShadow = "0 !important";
              box.style.animation = "slideDown "+speed+"s infinite";
                box.style.zIndex = "3";
              gameWindow.appendChild(box);
            
              box.addEventListener('mouseover', function(){
                  loseScreen(level);
              })
    }
    function gate(width, height, left, top, speed, rotate){
        const gate = document.createElement('div');
              gate.classList.add('gate');
              gate.classList.add('deadZone');
              gate.style.width = width+"px";
              gate.style.height = height+"px";
              gate.style.marginLeft = left+"px";
              gate.style.marginTop = top+"px";
              gate.style.transform = "rotate("+rotate+"deg)";
              gate.style.position ="absolute";
              gate.style.background = "#8080ff";
              gate.style.animation = "gate "+speed+"s infinite";
              gate.style.zIndex = "3";
              gameWindow.appendChild(gate);
            
              gate.addEventListener('mouseover', function(){
                  loseScreen(level);
              })
    }
    function deadAppear(width, height, left, top, speed, rotate, late){
             const deadAppear = document.createElement('div');
              deadAppear.classList.add('deadAppear');
              deadAppear.classList.add('deadZoneNoShadow');
              deadAppear.style.boxShadow = "0 !important";
              deadAppear.style.width = width+"px";
              deadAppear.style.height = height+"px";
              deadAppear.style.marginLeft = left+"px";
              deadAppear.style.marginTop = top+"px";
              deadAppear.style.transform = "rotate("+rotate+"deg)";
              deadAppear.style.position = "absolute";
              deadAppear.style.transtionDelay = late+'s';
              deadAppear.style.animation = "deadAppear "+speed+"s infinite "+late+'s linear';

              deadAppear.style.zIndex = "3";
              gameWindow.appendChild(deadAppear);
            
              deadAppear.addEventListener('mouseover', function(){
                  loseScreen(level);
              })
    }
    function movingWalls(width, height, left, top, speed, rotate, late){
            const movingWalls = document.createElement('div');
              movingWalls.classList.add('movingWalls');
              movingWalls.classList.add('deadZoneNoShadow');
              movingWalls.style.boxShadow = "0 !important";
              movingWalls.style.width = width+"px";
              movingWalls.style.height = height+"px";
              movingWalls.style.marginLeft = left+"px";
              movingWalls.style.marginTop = top+"px";
              movingWalls.style.transform = "rotate("+rotate+"deg)";
              movingWalls.style.position = "absolute";
              movingWalls.style.transtionDelay = late+'s';
              movingWalls.style.animation = "movingWalls "+speed+"s infinite "+late+'s linear';

              movingWalls.style.zIndex = "3";
              gameWindow.appendChild(movingWalls);
            
              movingWalls.addEventListener('mouseover', function(){
                  loseScreen(level);
              })
    }
    function roundedLine(width, height, left, top, rotate){
        const roundedLine = document.createElement('div');
              roundedLine.classList.add('roundedLine');
              roundedLine.style.zIndex = '2';
              roundedLine.style.width = width+"px";
              roundedLine.style.height = height+"px";
              roundedLine.style.marginTop = top+"px";
              roundedLine.style.marginLeft = left+"px";
              roundedLine.style.transform = "rotate("+rotate+"deg)";
              roundedLine.style.position = "absolute";
              gameWindow.appendChild(roundedLine);
    } 
    function boss(){
        const boss = document.createElement('div');
        boss.classList.add('boss');
        boss.style.position = "relative";
        boss.style.float = "left";
        boss.setAttribute("id", "boss");
       
        let state = 0; //0 state for normal eye, 1 state for closed
        if(state == 0){
            boss.style.backgroundImage = "url('open.gif')";
        }else if(state == 1){
            boss.style.backgroundImage = "url('close.gif')";
        }
        
        boss.style.height = "249px";
        boss.style.width = "298px";
        boss.style.transform = "scale(0.5)";
        boss.style.animation = "upndown 2s infinite linear";
        boss.style.marginLeft = "260px";
        boss.style.zIndex = "2";
        gameWindow.appendChild(boss);
        bossHealth(boss);
        
        function bossHealth(boss){
              let bossHealth = document.createElement('div');
                boss.dataset.health = 100;  
                let bossHealthPercent = boss.dataset.health;
                  bossHealth.classList.add('bosshealth');
                  bossHealth.style.marginTop = "-25px";
                  bossHealth.style.marginLeft = "10px";
                  bossHealth.style.position = "static";
                  bossHealth.style.float = "left";
                  bossHealth.style.whiteSpace = "nowrap";
                  bossHealth.style.animation = "none !important";
                  bossHealth.style.zIndex = "3";
                  bossHealth.style.width = bossHealthPercent+"%";
        
                  boss.appendChild(bossHealth);
                  bossAgainst(boss, bossHealthPercent, bossHealth);
                
    }   
        function bossAgainst(boss, bossHealthPercent, bossHealth){
               
                    

            

            const againstBoss = document.createElement('div');
                        function rollMarginLeft(){
                let margin = Math.floor((Math.random()* (670-50))+50);
                    return margin;
            }
            
            function rollMarginTop(){
                let margin = Math.floor((Math.random()* (250-75))+75);
                    return margin;
            }
            
                      againstBoss.style.width = "50px";
                      againstBoss.style.height = "50px";
                      againstBoss.style.position = "absolute";
                      againstBoss.style.zIndex = "2";
                      againstBoss.style.borderRadius = "14px";
                      againstBoss.style.background = "rgba(0,255,0,0.7)";
                      againstBoss.style.border = "solid 5px green";
                      againstBoss.classList.add('clicktowin');
                      againstBoss.style.marginTop = rollMarginTop()+"px";
                      againstBoss.style.marginLeft = rollMarginLeft()+"px";
                      gameWindow.appendChild(againstBoss);
            
            
                function checkHealth(){
                  if(boss.dataset.health > 75){
                      bossHealth.style.background = "green";
                  }
                    
                  if(boss.dataset.health <= 60){
                      bossHealth.style.background = "orange";
                  }
                
                  if(boss.dataset.health <= 30){
                      bossHealth.style.background = "darkred"; 
                  }
                    
                  if(boss.dataset.health < 1){
                      gameWindow.removeChild(boss); //make it slow disappear, but soon
                              
                const screenText = document.createElement('h3');
                      screenText.innerHTML = "Congratulations!<br>You have won the game<br><br>Thanks for playing!";
                      screenText.style.fontFamily = "firstplay";
                      screenText.style.position = "absolute";
                      screenText.style.zIndex = "999";
                      screenText.style.width = "700px";
                      screenText.style.height = "350px";
                      screenText.style.marginLeft = "50px";
                      screenText.style.marginTop = "50px";
                      screenText.style.paddingTop = "50px";
                      screenText.style.background = "aliceblue";
                      screenText.style.color = "black";
                      screenText.style.textAlign = "center";

                      gameWindow.appendChild(screenText);
                      
                const leaveButton = document.createElement('button');
                      leaveButton.innerHTML = "Back to menu";
                      leaveButton.style.fontFamily = "firstplay";
                      leaveButton.style.color = "white";
                      leaveButton.style.textAlign = "center";
                      leaveButton.style.marginLeft = "300px";
                      leaveButton.style.padding = "10px";
                      leaveButton.style.position = "absolute";
                      leaveButton.style.zIndex = "999";
                      leaveButton.style.marginTop = "250px";
                      gameWindow.appendChild(leaveButton);  
    
                      leaveButton.addEventListener('click', function(){
                          cleanPreviousLevel();
                          changeWindow('menu');
                      })
     
                      
                      
                }
            }
      
                againstBoss.addEventListener('click', function(){
                   if(boss.dataset.health > 0){
                    boss.dataset.health = boss.dataset.health - 5;
                   bossHealth.style.width = boss.dataset.health+"%";
                    gameWindow.removeChild(againstBoss);   
                    
                    rollMarginTop();
                    rollMarginLeft();
                    
                        bossAgainst(boss, bossHealthPercent, bossHealth);
                        checkHealth(boss, bossHealthPercent, bossHealth);
                    }
                   
                })
            }       
        function bossDefend(bossAgainst, checkHealth){
            const platform = document.createElement('div');
            platform.classList.add('platform');
            platform.style.position = "absolute";
            platform.style.width = "700px";
            platform.style.height = "400px";
            platform.style.marginLeft = "50px";
            platform.style.marginTop = "50px";
            gameWindow.appendChild(platform);
             
            function rollMargin(){
                let margin = Math.floor((Math.random()* (670-0))+0);
                    return margin;
            }
            function rollWidth(){
                let bulletWidth = Math.floor((Math.random()* (50-45))+45);        
                    return bulletWidth;
            }
            function rollRotate(){
                            let bulletDirection = Math.floor((Math.random()* (360-0))+0);
                                return bulletDirection;
                        }
            function rollRadius(){
                            let radius = 30;
                                return radius;
                        }   

            
        
            
                                        
            let amount = 2;
            let time = 1;
            function bullet(amount, platform, deleteBullet){
                
                if(boss.dataset.health < 80){
                    amount = 4;
                }
                
                if(boss.dataset.health < 60){
                    amount = 8;
                }
                
                if(boss.dataset.health < 40){
                    amount = 14;
                }
                
                if(boss.dataset.health < 20){
                   amount = 18;
                }

                
                for(var i = 1; i <= amount; i++){
                   let bullet = document.createElement('div');
                        bullet.classList.add('bullet'+i);
                        platform.dataset.bullets = i;
                        bullet.style.width = rollWidth()+'px';
                       // bullet.style.transform = "rotate("+rollRotate()+"deg)";
                        bullet.style.borderRadius = rollRadius()+"px";
                        bullet.style.marginLeft = rollMargin()+'px';
                        bullet.style.position = "absolute";
                        bullet.style.background = "red";
                        bullet.style.animation = "shootme "+time+"s infinite linear";
                        bullet.style.height = "50px";
                        bullet.style.zIndex = "2";
                        platform.appendChild(bullet);
                    
                        bullet.addEventListener('mouseover', function(){
                            loseScreen(level);
                        })

                }
            }
            
                    
            
                        function deleteBullet(platform, checkHP){
                            while (platform.firstChild) {
                                platform.removeChild(platform.firstChild);
                            }
                            
                            if(boss.dataset.health > 1){
                                setTimeout(checkHP,1000); 
                            }      
                            
                            if(boss.dataset.health < 1){
                                deleteBullet();                                
                            }
                        }
            
                    
                         function checkHP(){
                            setTimeout(rollWidth, 1000);
                            setTimeout(rollRadius, 1000);
                            setTimeout(rollRotate, 1000);
                            setTimeout(rollMargin, 1000);
                            setTimeout(deleteBullet(platform, checkHP), 2000);  
                            setTimeout(bullet(amount,platform), 1000);
                             
                        }   
                    checkHP(); 
            
        }
        bossDefend();
        
        
        
    }//endofboss
    

    //create levels
    if(level == 1){ 
        straightLine(100, 480, 350, 0 , 0);
        spinCircle(80, 10, 360, 320, 2);
        spinCircleReverse(80, 10, 360, 230, 2);
        spinCircle(80, 10, 360, 140, 2);
    }
    else if(level == 2){
        straightLine(700, 75, 0, 80 , 0);
        straightLine(600, 75, 112, 210 , -25);
        
        spinCircle(65, 10, 100, 112, 1.5);
        spinCircleReverse(65, 10, 200, 112, 1);
        spinCircle(65, 10, 300, 112, 1);
        spinCircleReverse(65, 10, 400, 112, 1.5);
        spinCircle(110, 20, 530, 126, 3);
        box(30, 30, 450, 170, 1, 124);
        box(30, 30, 450, 225, 1, 53);
        box(30, 30, 375, 205, 1, 24);
        box(30, 30, 375, 260, 1, 55);
        
        box(30, 30, 300, 280, 1, 124);
        box(30, 30, 300, 225, 1, 53);
        box(30, 30, 230, 325, 1, 24);
        box(30, 30, 230, 270, 1, 55);
    }
    else if(level == 3){
        straightLine(100,100,350,210,0);
        roundedLine(50,50,375,162,120);
        roundedLine(40,40,375,122,120);
            spinCircle(25,5,382,138,1.5,0);
        straightLine(100,20,380,75,-58);
            box(5, 5, 403, 110, 0, 0);
            box(8, 8, 423, 95, 0, 0);
            spinCircleReverse(15,4,426,77,1.5,0);
            box(8, 8, 445, 60, 0, 0);
            box(5, 5, 444, 43, 0, 0);
        straightLine(200,20,448.5,37,0);
        straightLine(180,400,468.5,37,0);
            spinCircleReverse(170,10,472,138,3,0);
            spinCircleReverse(170,10,472,138,2,0);
            spinCircle(170,10,472,320,3,0);
            spinCircle(170,10,472,320,2,0);
        straightLine(200,20,320,417,0);
        straightLine(50,15,280,417,0);
        straightLine(40,10,240,417,0);
        straightLine(50,15,222,390,90);
        roundedLine(50,50,222,340,90);
            gate(1,10,222,360,2);
        roundedLine(30,40,232,305,90);
        roundedLine(50,50,222,260,90);
            gate(1,10,222,280,1);
        roundedLine(30,40,232,225,90);
        roundedLine(50,50,222,180,90);
            gate(1,10,222,200,2);
        straightLine(100,20,160,140,-120);
        straightLine(75,20,149,139,90);
        straightLine(65,20,145,209,90);
            deadAppear(65,20,145,209,3,-90,0);
        straightLine(75,20,149,279,90);
    }
    else if(level == 4){
        //these moving elements are stored in startPosition, because
        //walls start to move after hovering the start icon
        straightLine(400,50,25,45,0);
            //movingWalls(425,50,25,45,10,0,0);
            spinCircle(5,40,200,50,2);
            spinCircleReverse(5,40,300,50,2);
        straightLine(50, 400, 400, 45, 0);
           // movingWallsHeight(50,400,400,45,12,0,0);
            box(30,25,400,125,2,40);
            box(30,25,420,200,2,20);
            box(30,25,400,275,2,20);
            box(30,25,420,350,2,20);
        straightLine(50,50,360,395,0);
            gate(0,5,340,420,1.5,0);
        straightLine(50,50,340,375,0);
            gate(0,5,320,400,1,0);
        straightLine(50,50,320,355,0);
            gate(0,5,300,380,1,0);
        straightLine(50,50,300,335,0);
            gate(0,5,280,360,1.5,0);
        straightLine(50,50,280,315,0);
        straightLine(150,150,200,200,0);
            spinCircle(120,5,215,270,2);
        straightLine(100,35,130,350,-40);
        straightLine(120,25,115,415,50);
        straightLine(250,25,204,458,0);
        straightLine(100,23,430,428,-45);
        straightLine(70,70,480,370,0);
            deadAppear(70,70,480,370,3,0,2);
        straightLine(70,70,480,300,0);
            deadAppear(70,70,480,300,3,0,3);
        straightLine(70,70,480,230,0);
            deadAppear(70,70,480,230,3,0,4);
        straightLine(70,25,480,183,90);
        straightLine(100,25,505,160.5,0);
        
        unlockFinishPlace(level, 240, 230, 240, 300, 300, 260, 25, 25, 580, 160, 0);
    }
    else if(level == 5){
    straightLine(300, 75, -60, 130, 250);
    straightLine(304, 20, 0, 150, 100);
        gate(15, 5, 154, 60, 1.2, 99);
        gate(15, 5, 138, 150, 1.2, 99);    
        
    straightLine(200, 10, 110, 310, 0);
    straightLine(30, 10, 303, 302, -40);
    straightLine(30, 10, 305, 288, 50);
    straightLine(60, 10, 297, 258, -40);
        
    straightLine(200, 100, 295, 100, 90);
        spinCircle(40, 10, 350, 200, 1);
        spinCircleReverse(50, 10, 390, 160, 1);
        spinCircle(40, 10, 350, 120, 1);
        spinCircleReverse(50, 10, 390, 80, 1);
        straightLine(20, 20, 385, 30, 90);
        gate(0, 5, 370, 50, 1.5, 0);
        
    straightLine(80, 10, 430, 160, -40);
        straightLine(80, 10, 485, 172, 50);
        straightLine(50, 50, 505, 189, 50);
            deadAppear(50,50, 505, 189, 4, 50, 2);
        straightLine(50, 50, 570, 189, 50);
            deadAppear(50,50, 570, 189, 4, 50, 2.5);
        straightLine(50, 50, 635, 189, 50);
            deadAppear(50,50, 635, 189, 4, 50, 3);
        straightLine(50, 50, 710, 189, 0);
        straightLine(30, 50, 680, 189, 0);
        
    unlockFinishPlace(level, 18, 171, 35, 390, 80, 70, 50, 50, 710, 189);

    }
    else if(level == 6){
        straightLine(700,400,50,50,0);
        boss();
        
    }
}    
        

}) //end of DOM