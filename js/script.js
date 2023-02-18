        function defineMinMax(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        
        // Attack function
        function decrease() {
            var v1=document.getElementById('p1').value;
            var v2=document.getElementById('p2').value;
            var x = defineMinMax(2,14);
            var y = defineMinMax(2,25);
            
            document.getElementById("p1").value= v1 - x;
            document.getElementById("p2").value= v2 - y;
            
            const activity1 = "Monster attacks and deals " + y;
            const activity2 = "Player attacks and deals " + x;

            const battleList = document.querySelector("#battles");

            const attacks1 = document.createElement("li");
            attacks1.innerText = activity1;
            battleList.appendChild(attacks1);
            
            const attacks2 = document.createElement("li");
            attacks2.innerText = activity2;
            battleList.appendChild(attacks2);
            
            if(document.getElementById('p1').value === 0){
                document.getElementById("lastTitle").innerText = "Game Over";
                document.getElementById('battles').innerText = "You Won !";
                startNewGame();
                hideBtns();
                
            } else if (document.getElementById('p2').value === 0) {
                document.getElementById("lastTitle").innerText = "Game Over";
                document.getElementById('battles').innerText = "Monster Won !";
                startNewGame();
                hideBtns();
                
            } else if (document.getElementById('p2').value === document.getElementById('p1').value){
                document.getElementById("lastTitle").innerText = "Game Over";
                document.getElementById('battles').innerText = "It's a draw !";
                startNewGame();
                hideBtns();
            }
        }
        
        // Heal function
        function increase() {
            var v2 = document.getElementById('p2').value;
            if(v2 < 100){                    
                var y = defineMinMax(2,25);
                
                for (let i = 0; i <= 2; i++) {
                    document.getElementById("p2").value= v2 + y;
                }
                
                const activities = document.getElementById("history-part-1").innerHTML + " " + y;
                const battleList = document.querySelector("#battles");
                
                const heal = document.createElement("li");
                heal.innerText = activities;
                battleList.appendChild(heal);
            }
        }
        
        function specialAttack() {
            var v1=document.getElementById('p1').value;
            var v2=document.getElementById('p2').value;
            var result = (Math.abs(v1 - v2) / v1) * 100;
            
            if(result > 20 && v1 > v2){
                var y = defineMinMax(2,25);
                document.getElementById("p1").value= v1 - y - v2 * 0.8;
            }
        }
        
        function giveUp(){
            document.getElementById('p2').value = 0;
            
            document.getElementById("lastTitle").innerText = "Game Over";
            document.getElementById('battles').innerText = "Monster Won !";
            startNewGame();
            hideBtns();
        }
        
        function startNewGame(){
            const btnList = document.querySelector("#battle-history");
            
            const newGameBtn = document.createElement("button");
            newGameBtn.className = "newGameBtn";
            newGameBtn.innerText = "New Game";
            btnList.appendChild(newGameBtn);
            
            newGameBtn.addEventListener("click", () => {
                document.getElementById('p1').value = 100;
                document.getElementById('p2').value = 100;
                newGameBtn.style.display = "none";
                document.getElementById("lastTitle").innerText = "Battle log";
                document.getElementById('battles').innerText = "";
                
                attackBtn.style.display = "block";
                gvupBtn.style.display = "block";
                healBtn.style.display = "block";
                spBtn.style.display = "block";
            });
        }
        
        function hideBtns(){
            attackBtn.style.display = "none";
            gvupBtn.style.display = "none";
            healBtn.style.display = "none";
            spBtn.style.display = "none";
        }