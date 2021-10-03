* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;    
    list-style: none;
    text-decoration: none;
}

body {
    background-color: #E5E5E5;   
    font-family: 'Roboto', sans-serif;
    width: 100vw;
}

h2 {
    font-size: 20px;
}

.menu-geral {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
    margin-top: 20px;
}

.menu-modulos {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.item-do-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 12px;
    padding: 12px 15px;
    border: none;
    cursor: pointer;
    background-color: #E5E5E5;
    font-weight: bold;
    font-size: 14px;
}

.item-do-menu:hover:not(.menuItem-active) {
    background-color: #5CBA9B;
    transition: 0.5s;
}

.item-do-menu-active {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 12px;
    padding: 12px 15px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    background-color: #976EB0;
}

.texto-do-menu {
    font-size: 14px;
    margin-left: 18px;
    text-align: left;
}

.navstyle {
    display: none;
}