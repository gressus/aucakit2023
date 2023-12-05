    <header>
        <div class="logo">
            <a href="#" id="logo">
                <img src="logo3.jpg" alt="Logo">
            </a>
            <h3>
                КЫРГЫЗСКИЙ НАЦИОНАЛЬНЫЙ АКАДЕМИЧЕСКИЙ ТЕАТР ОПЕРЫ И БАЛЕТА
            </h3>
        </div>

        <input type="checkbox" id="burger-toggle">
        <label for="burger-toggle">
            <div class="burger">&#9776;</div>
            <div class="close-icon">&#10006;</div> 
        </label>
        
        <nav class="menu">
            <ul>
                <li><a href="#home">О ТЕАТРЕ</a></li>
                <li><a href="#home">КУПИТЬ БИЛЕТ</a></li>
                <li><a href="#contacts">АФИША</a></li>
                <li><a href="#about">РЕПЕРТУАР</a></li>
                <li><a href="#events">ПРЕМЬЕРЫ</a></li>
                <li><a href="#events">КОНТАКТЫ</a></li>
            </ul>
        </nav>
    </header>

<slot/>

<style>
        header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
            /* background-color: black; */
            opacity: 0.8;
            padding: 15px;
            font-family: Arial, Helvetica, sans-serif;
            box-sizing: border-box;
            color: white;
            position: fixed;
            width: 100%;
        }
        #logo img {
            width: 100px; /* Set the desired width for your logo */
            height: auto;
        }
        header a{
            /* margin: 10px; */
            text-decoration: none; 
            color: black;
        } 
        .logo {
            display: flex;

        }
        .logo h3 {
            margin: 10px;
            width: 300px;
        }
        .menu{
            display: block;
            color: white;
            position: absolute;
            right: 0px;
            width: 250px;
            transition: 0.5s;
        }
        .menu ul {
            list-style: none; 
            text-decoration: none;
            display: flex;
            justify-content: flex-end;
            /* margin-left: 40px; */
        }
        .menu li {
            /* display: inline; */
            padding: 15px;
            text-decoration: none;
            white-space: nowrap;
        }
        .menu a {
            text-decoration: none;
            color: white;
        }

        #burger-toggle:checked ~ .menu {
            display: block;
            right: 0px;
        }
        /* #burger-toggle:checked ~ .burger .line {
            display: block;
            right: 0px;
        } */

        /* .burger .line {
            width: 30px;
            height: 4px;
            background-color: white;
            margin: 5px 0;
            opacity: 0.8;
        } */

        #burger-toggle {
            display: none;
        }

        .burger {
            display: none;
            position: absolute;
            right: 20px;
            z-index: 1;
            font-size: 24px;
        }
        .close-icon {
            display: none; 
        }

        @media (max-width: 768px) {
            .burger {
                display: block;
            }  
            #burger-toggle:checked + label .burger {
                display: none;
            }
            
            #burger-toggle:checked + label .close-icon {
                display: block;
                right: 20px;
                z-index: 1;
                position: absolute;
                font-size: 24px;
            }
            
            .menu {
                /* display: none; */
                background: #ba4848;
                /* background-color: rgba(186, 72, 72, 0.8);  */
                /* z-index: 10;     */
                right: -100%;
                /* opacity: 0.8; */
            }  
            
            .menu li {
                display: block;
            }
            
            .menu ul {
                /* display: flex; */
                flex-direction: column;
            }  
            header {
                align-items: start;
            }
        }

</style>