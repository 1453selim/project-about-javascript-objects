let team = {
   
    _positions: {  
    center: [],
    forward: [],
    guard: []
    },
    // setter method step 4
    set center(myCenter) {
    this.center = myCenter;
    },
    set forward(myForvard){
    this.forward = myForvard;
    },
    set guard(myGuard){
    this.guard = myGuard;
    },
    // a getter method step 4
    get center(){
    return this.center;
    },
    get forward(){
    return this.forward;
    },
    get guard(){
    return this.guard;
    },
    // a getter method for the positions property
    get positions(){
    return {
    center: this._positions.center,
    forward: this._positions.forward,
    guard: this._positions.guard,
    };
    },
    // step 7 
    addPlayerToPosition:function(positionName, playerName, playerPoint){
    const player = {
    name: playerName,
    point: playerPoint,
    }
    return this._positions[positionName].push(player);
    },
    
    getRandomPlayerFromPosition:function(positionName){
    const players = this._positions[positionName];//this._positions[center] etc
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
    },
    // to select random player from positions name for center,for guard,for forward
    generateRandomTeam:function(){
    const center = this.getRandomPlayerFromPosition('center');
    const forward1 = this.getRandomPlayerFromPosition('forward');
    const forward2 = this.getRandomPlayerFromPosition('forward');
    const guard1 = this.getRandomPlayerFromPosition('guard');
    const guard2 = this.getRandomPlayerFromPosition('guard');
    const averagePoint = (center.point + forward1.point + forward2.point + guard1.point + guard2.point) / 5;// to calculate team average points which given in addPlayerPosition for team which we select
    return `Your team is : \n${center.name}, \n${forward1.name}, \n${forward2.name}, \n${guard1.name} \nand ${guard2.name}. \nThe average point is : ${averagePoint}`;
    }
    }; 
    // to test set methods
   /*  team.myForward = "selim isabetli"
    team.myCenter="selim isabetli"
    team.myGuard="selim isabetli"
    console.log(team) */
   




team.addPlayerToPosition('center', 'Bam Adebayo', 5.25);
team.addPlayerToPosition('center', 'Ömer FarukYurtseven', 23.25);
team.addPlayerToPosition('center', 'Steve Adams', 7.50);
team.addPlayerToPosition('center', 'Antony Daves', 18.50);
team.addPlayerToPosition('center', 'Nİko Jokic', 8.50);
team.addPlayerToPosition('center', 'Yusuf Nurkic', 15.50);
team.addPlayerToPosition('center', 'Shaquel  Oneal', 23.50);

team.addPlayerToPosition('forward', 'LeBron James', 29.50);
team.addPlayerToPosition('forward', 'Kevin Durant', 25.00);
team.addPlayerToPosition('forward', 'Alperen Sengün', 27.50);
team.addPlayerToPosition('forward', 'Cedi Osman', 28.25);
team.addPlayerToPosition('forward', 'Furkan Korkmz', 8.50);
team.addPlayerToPosition('forward', 'Kobe Braynt', 35.25);
team.addPlayerToPosition('forward', 'Michael Jordan', 38.50);

team.addPlayerToPosition('guard', 'James Harden', 29.00);
team.addPlayerToPosition('guard', 'Stephen Curry', 32.25);
team.addPlayerToPosition('guard', 'Chris Paul', 17.50);
team.addPlayerToPosition('guard', 'Luka  Doncic', 26.50);
team.addPlayerToPosition('guard', 'Kyre Erving', 25.50); 
team.addPlayerToPosition('guard', 'Steve  Nash', 20.50);
team.addPlayerToPosition('guard', 'Jason Kid', 25.50);  
let myTeam =team.generateRandomTeam();
console.log(myTeam); 
console.log(team)