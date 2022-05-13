        function getRandomInt(max) {
            return Math.floor((Math.random() * max) + 1);
        }// pass in param of max #

        function getHomeIcon(selector){
            switch(selector){
                case 1:  return 'url(/img/broom.jpg)';
                break;
                case 2:  return 'url(/img/vacuum.jpg)';
                break;
                case 3:  return 'url(/img/laundry.jpg)';
                break;
                case 4:  return 'url(/img/dishes.jpg)';
                break;
                case 5:  return 'url(/img/bedroom.jpg)';
                break;
                case 6:  return 'url(/img/bathroomAlt.jpg)';
                break;
                default: console.log("default occured; error in selection");
            }
        }// pass in random number selector for selector icon -- home tasks

        function getPersonalIcon(selector){
            switch(selector){
                case 1:  return 'url(/img/exercise.jpg)';
                break;
                case 2:  return 'url(/img/yoga.jpg)';
                break;
                case 3:  return 'url(/img/journal.jpg)';
                break;
                case 4:  return 'url(/img/music.jpg)';
                break;
                case 5:  return 'url(/img/hair.jpg)';
                break;
                case 6:  return 'url(/img/gardening.jpg)';
                break;
                default: console.log("default occured; error in selection");
            }
        }// pass in random number selector for selector icon -- home tasks

        function getCreativeIcon(selector){
            switch(selector){
                case 1:  return 'url(/img/petTricks.jpg)';
                break;
                case 2:  return 'url(/img/newRecipe.jpg)';
                break;
                case 3:  return 'url(/img/newSeries.jpg)';
                break;
               /* case 4:  return 'url(/assets/dishes.jpg)';
                break;
                case 5:  return 'url(/assets/bedroom.jpg)';
                break;
                case 6:  return 'url(/assets/bathroomAlt.jpg)';
                break;*/
                default: console.log("default occured; error in selection");
            }
        }// pass in random number selector for selector icon -- home tasks

        function setImage(){
            var randomOne = getRandomInt(6); // random number selector for 1->6
            var randomTwo = getRandomInt(6);
            var randomThree = getRandomInt(3);
            let homeIcon = getHomeIcon(randomOne); // 
            let personalIcon = getPersonalIcon(randomTwo);
            let creativeIcon = getCreativeIcon(randomThree);

            document.querySelector('#cardOne.card').style.backgroundImage = homeIcon;
            document.querySelector('#cardTwo.card').style.backgroundImage = personalIcon;
            document.querySelector('#cardThree.card').style.backgroundImage = creativeIcon;
        }// call this function to set the new image when rollDice click

        function resetImage(){
            let normalBackground = document.querySelector('.card').style.background;

            document.querySelector('#cardOne.card').style.backgroundImage = normalBackground;
            document.querySelector('#cardTwo.card').style.backgroundImage = normalBackground;
            document.querySelector('#cardThree.card').style.backgroundImage = normalBackground;
            
        }// call this function to reset when resetClick

        document.querySelector('#rollDice').addEventListener('click', function(){
            //console.log(randomSeven);
            //console.log(randomSix);
            console.log("Rolled the dice!");
            setImage();
            
        }); // get random task imgs onClick
        document.querySelector('#resetDice').addEventListener('click', function(){
            resetImage();
            console.log("Reset the dice!");
        }); // reset the dice to default 

        // number assignment for img icons
    //------- Home Task imgs [1->7]
        //<a href="https://www.vectorstock.com/royalty-free-vector/flat-icon-on-background-halloween-witchs-broom-vector-18619614">Vector image by VectorStock / Anastasia8</a>; // broom for home task

        //<a href="https://www.vectorstock.com/royalty-free-vector/vacuum-cleaner-flat-icon-vector-33743295">Vector image by VectorStock / vectorstock</a>; // vacuum for home task

        //<a href="https://www.vectorstock.com/royalty-free-vector/flat-modern-design-with-shadow-icons-basket-vector-32325769">Vector image by VectorStock / Robot</a>; // laundry for home tasks

        //<a href="https://www.vectorstock.com/royalty-free-vector/provide-etiquette-on-white-background-flat-vector-9567184">Vector image by VectorStock / Kapitosh</a>; // dishes icon for home tasks

        //<a href="https://www.vectorstock.com/royalty-free-vector/double-bed-flat-icon-vector-33742751">Vector image by VectorStock / vectorstock</a>; // bed icon for home tasks (like cleaning bedsheets or the bedroom in general)

        //<a href="https://www.vectorstock.com/royalty-free-vector/flat-modern-design-with-shadow-icons-washbasin-vector-32325641">Vector image by VectorStock / Robot</a>; // bathroom icon for home tasks

        //<a href="https://www.vectorstock.com/royalty-free-vector/flat-modern-design-with-shadow-icons-toilet-paper-vector-32176339">Vector image by VectorStock / Robot</a>; // alt to the bathroom icon above
    //------- Personal Task imgs [1->6]
        //<a href="https://www.vectorstock.com/royalty-free-vector/flat-modern-design-with-shadow-man-silhouette-vector-32326051">Vector image by VectorStock / Robot</a> --- hair for personal care 

        //<a href="https://www.vectorstock.com/royalty-free-vector/icon-in-flat-design-flower-in-pot-aloe-vector-20204413">Vector image by VectorStock / Anastasia8</a> --- gardening for personal care

        //<a href="https://www.vectorstock.com/royalty-free-vector/woman-doing-yoga-practice-vector-2514927">Vector image by VectorStock / bordzhiya</a> --- yoga for personal care 

        //<a href="https://www.vectorstock.com/royalty-free-vector/flat-modern-design-with-shadow-icon-dumbbell-vector-32249758">Vector image by VectorStock / Robot</a> --- exercise icon for personal care

        //<a href="https://www.vectorstock.com/royalty-free-vector/flat-modern-design-with-shadow-icons-headphones-vector-32161880">Vector image by VectorStock / Robot</a> --- music icon for personal care

        //<a href="https://www.vectorstock.com/royalty-free-vector/flat-modern-design-with-shadow-icon-notebook-vector-32059244">Vector image by VectorStock / Robot</a> --- journal icon for personal care
    //------- Creative Task imgs [1->6]
        //<a href="https://www.vectorstock.com/royalty-free-vector/assembly-flat-icons-dogs-cats-pets-vector-16124940">Vector image by VectorStock / Anastasia8</a> --- teach your pet a trick for creative tasks

        //<a href="https://www.vectorstock.com/royalty-free-vector/birthday-cake-vector-3490818">Vector image by VectorStock / Artulina</a> --- bake a cake or something new 

        //<a href="https://www.vectorstock.com/royalty-free-vector/flat-modern-design-with-shadow-tv-antenna-vector-32249947">Vector image by VectorStock / Robot</a> -- tv for creative task --> new show or randomize selection