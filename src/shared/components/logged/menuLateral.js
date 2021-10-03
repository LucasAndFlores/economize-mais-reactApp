import React from 'react';
import { BackgroundContainerStyle } from '../../../shared/styles/styleBackground';
import { MenuGeral, 
        MenuModulos,
        ItemMenu,
        TextoMenu,
        ImgHeader,
        ImgLogo
        } from '../../../shared/components/logged/menuLateralStyle'

import logo from '../../img/logo2.jpg'

const MenuLateral = () => {
    return (
        <BackgroundContainerStyle>
            <MenuGeral>  
                <ImgHeader>
                    <ImgLogo href="/" src={logo}></ImgLogo>
                </ImgHeader>          
                <MenuModulos>
                    <ItemMenu onclick="location.href='/index/'">   
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDg4LjM5OSw0OTJoLTIxLjkzM1YxNzMuNTM2YzAtMTQuODIzLTEyLjA2LTI2Ljg4Mi0yNi44ODItMjYuODgySDM5MC41NmMtMTQuODIzLDAtMjYuODgyLDEyLjA2LTI2Ljg4MiwyNi44ODJWNDkyDQoJCQloLTU1LjY5MlYzMTcuODI1YzAtMTQuODIzLTEyLjA1OS0yNi44ODItMjYuODgyLTI2Ljg4MkgyMzIuMDhjLTE0LjgyMywwLTI2Ljg4MiwxMi4wNi0yNi44ODIsMjYuODgyVjQ5MmgtNTUuNjkydi05MC4yMDQNCgkJCWMwLTE0LjgyMy0xMi4wNi0yNi44ODItMjYuODgyLTI2Ljg4Mkg3My41OTljLTE0LjgyMywwLTI2Ljg4MiwxMi4wNi0yNi44ODIsMjYuODgyVjQ5MkgyMy42MDFjLTUuNTIzLDAtMTAsNC40NzctMTAsMTANCgkJCXM0LjQ3NywxMCwxMCwxMGg0NjQuNzk4YzUuNTIzLDAsMTAtNC40NzcsMTAtMTBTNDkzLjkyMiw0OTIsNDg4LjM5OSw0OTJ6IE0xMjkuNTA0LDQ5Mkg2Ni43MTZ2LTkwLjIwNA0KCQkJYzAtMy43OTUsMy4wODctNi44ODIsNi44ODItNi44ODJoNDkuMDI0YzMuNzk1LDAsNi44ODIsMy4wODcsNi44ODIsNi44ODJWNDkyeiBNMjg3Ljk4NSw0OTJoLTYyLjc4OFYzMTcuODI1DQoJCQljMC0zLjc5NSwzLjA4Ny02Ljg4Miw2Ljg4Mi02Ljg4Mmg0OS4wMjRjMy43OTQsMCw2Ljg4MiwzLjA4Nyw2Ljg4Miw2Ljg4MlY0OTJ6IE00NDYuNDY2LDQ5MmgtNjIuNzg4VjE3My41MzYNCgkJCWMwLTMuNzk1LDMuMDg3LTYuODgyLDYuODgyLTYuODgyaDQ5LjAyNGMzLjc5NSwwLDYuODgyLDMuMDg3LDYuODgyLDYuODgyVjQ5MnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ2Ni40NDIsMTAuNTE2YzAuMTQtMi43MjktMC44Mi01LjUwNC0yLjkwNC03LjU4OGMtMi4wODQtMi4wODQtNC44NTktMy4wNDUtNy41ODgtMi45MDQNCgkJCUM0NTUuNzg5LDAuMDE3LDQ1NS42MywwLDQ1NS40NjYsMGgtNjAuNWMtNS41MjMsMC0xMCw0LjQ3Ny0xMCwxMHM0LjQ3NywxMCwxMCwxMGgzNy4zNTdsLTk4Ljg1Nyw5OC44NThsLTM3LjI4LTM3LjI4DQoJCQljLTEuODc1LTEuODc1LTQuNDE5LTIuOTI5LTcuMDcxLTIuOTI5Yy0yLjY1MiwwLTUuMTk2LDEuMDU0LTcuMDcxLDIuOTI5bC0xNzkuNzY5LDE3OS43N2MtMy45MDUsMy45MDUtMy45MDUsMTAuMjM3LDAsMTQuMTQzDQoJCQljMS45NTMsMS45NTEsNC41MTIsMi45MjcsNy4wNzEsMi45MjdzNS4xMTktMC45NzYsNy4wNzEtMi45MjlMMjg5LjExNSwxMDIuNzlsMzcuMjgsMzcuMjhjMy45MDUsMy45MDUsMTAuMjM3LDMuOTA1LDE0LjE0MywwDQoJCQlMNDQ2LjQ2NiwzNC4xNDN2MzMuODFjMCw1LjUyMyw0LjQ3NywxMCwxMCwxMHMxMC00LjQ3NywxMC0xMFYxMUM0NjYuNDY2LDEwLjgzNyw0NjYuNDQ5LDEwLjY3OCw0NjYuNDQyLDEwLjUxNnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBjeD0iNzUuNjQiIGN5PSIzMDMuMzEiIHI9IjEwIi8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                        alt="" width="20px" height="20px" ></img>                   
                        <TextoMenu> Visão geral </TextoMenu>
                    </ItemMenu>
                    <ItemMenu>
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAuMTIzIDYwLjEyMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjAuMTIzIDYwLjEyMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTU3LjEyNCw1MS44OTNIMTYuOTJjLTEuNjU3LDAtMy0xLjM0My0zLTNzMS4zNDMtMywzLTNoNDAuMjAzYzEuNjU3LDAsMywxLjM0MywzLDNTNTguNzgxLDUxLjg5Myw1Ny4xMjQsNTEuODkzeiIvPg0KCTxwYXRoIGQ9Ik01Ny4xMjQsMzMuMDYySDE2LjkyYy0xLjY1NywwLTMtMS4zNDMtMy0zczEuMzQzLTMsMy0zaDQwLjIwM2MxLjY1NywwLDMsMS4zNDMsMywzDQoJCUM2MC4xMjQsMzEuNzE5LDU4Ljc4MSwzMy4wNjIsNTcuMTI0LDMzLjA2MnoiLz4NCgk8cGF0aCBkPSJNNTcuMTI0LDE0LjIzMUgxNi45MmMtMS42NTcsMC0zLTEuMzQzLTMtM3MxLjM0My0zLDMtM2g0MC4yMDNjMS42NTcsMCwzLDEuMzQzLDMsM1M1OC43ODEsMTQuMjMxLDU3LjEyNCwxNC4yMzF6Ii8+DQoJPGNpcmNsZSBjeD0iNC4wMjkiIGN5PSIxMS40NjMiIHI9IjQuMDI5Ii8+DQoJPGNpcmNsZSBjeD0iNC4wMjkiIGN5PSIzMC4wNjIiIHI9IjQuMDI5Ii8+DQoJPGNpcmNsZSBjeD0iNC4wMjkiIGN5PSI0OC42NjEiIHI9IjQuMDI5Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
                         alt="" width="20px" height="20px" ></img>
                        <TextoMenu> Transações </TextoMenu>
                    </ItemMenu>
                    <ItemMenu onclick="location.href='/index/cartoes'">
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NTguNjY3LDg1LjMzM0g1My4zMzNDMjMuOTM2LDg1LjMzMywwLDEwOS4yNjksMCwxMzguNjY3djIzNC42NjdjMCwyOS4zOTcsMjMuOTM2LDUzLjMzMyw1My4zMzMsNTMuMzMzaDQwNS4zMzMNCgkJCWMyOS4zOTcsMCw1My4zMzMtMjMuOTM2LDUzLjMzMy01My4zMzNWMTM4LjY2N0M1MTIsMTA5LjI2OSw0ODguMDY0LDg1LjMzMyw0NTguNjY3LDg1LjMzM3ogTTQ5MC42NjcsMzczLjMzMw0KCQkJYzAsMTcuNjQzLTE0LjM1NywzMi0zMiwzMkg1My4zMzNjLTE3LjY0MywwLTMyLTE0LjM1Ny0zMi0zMlYxMzguNjY3YzAtMTcuNjQzLDE0LjM1Ny0zMiwzMi0zMmg0MDUuMzMzYzE3LjY0MywwLDMyLDE0LjM1NywzMiwzMg0KCQkJVjM3My4zMzN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik01MDEuMzMzLDE0OS4zMzNIMTAuNjY3QzQuNzc5LDE0OS4zMzMsMCwxNTQuMTEyLDAsMTYwdjY0YzAsNS44ODgsNC43NzksMTAuNjY3LDEwLjY2NywxMC42NjdoNDkwLjY2Nw0KCQkJYzUuODg4LDAsMTAuNjY3LTQuNzc5LDEwLjY2Ny0xMC42Njd2LTY0QzUxMiwxNTQuMTEyLDUwNy4yMjEsMTQ5LjMzMyw1MDEuMzMzLDE0OS4zMzN6IE00OTAuNjY3LDIxMy4zMzNIMjEuMzMzdi00Mi42NjdoNDY5LjMzMw0KCQkJVjIxMy4zMzN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yMDIuNjY3LDI5OC42NjdoLTEyOGMtNS44ODgsMC0xMC42NjcsNC43NzktMTAuNjY3LDEwLjY2N1M2OC43NzksMzIwLDc0LjY2NywzMjBoMTI4DQoJCQljNS44ODgsMCwxMC42NjctNC43NzksMTAuNjY3LTEwLjY2N1MyMDguNTU1LDI5OC42NjcsMjAyLjY2NywyOTguNjY3eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjAyLjY2NywzNDEuMzMzaC0xMjhDNjguNzc5LDM0MS4zMzMsNjQsMzQ2LjExMiw2NCwzNTJjMCw1Ljg4OCw0Ljc3OSwxMC42NjcsMTAuNjY3LDEwLjY2N2gxMjgNCgkJCWM1Ljg4OCwwLDEwLjY2Ny00Ljc3OSwxMC42NjctMTAuNjY3QzIxMy4zMzMsMzQ2LjExMiwyMDguNTU1LDM0MS4zMzMsMjAyLjY2NywzNDEuMzMzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDE2LDI3Ny4zMzNoLTIxLjMzM2MtMTcuNjQzLDAtMzIsMTQuMzU3LTMyLDMydjIxLjMzM2MwLDE3LjY0MywxNC4zNTcsMzIsMzIsMzJINDE2YzE3LjY0MywwLDMyLTE0LjM1NywzMi0zMnYtMjEuMzMzDQoJCQlDNDQ4LDI5MS42OTEsNDMzLjY0MywyNzcuMzMzLDQxNiwyNzcuMzMzeiBNNDI2LjY2NywzMzAuNjY3YzAsNS44ODgtNC43NzksMTAuNjY3LTEwLjY2NywxMC42NjdoLTIxLjMzMw0KCQkJYy01Ljg4OCwwLTEwLjY2Ny00Ljc3OS0xMC42NjctMTAuNjY3di0yMS4zMzNjMC01Ljg4OCw0Ljc3OS0xMC42NjcsMTAuNjY3LTEwLjY2N0g0MTZjNS44ODgsMCwxMC42NjcsNC43NzksMTAuNjY3LDEwLjY2Nw0KCQkJVjMzMC42Njd6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                         alt="" width="20px" height="20px" ></img>                
                        <TextoMenu> Cartões </TextoMenu>
                    </ItemMenu>
                    <ItemMenu onclick="location.href='/index/entradas'">
                        <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTM0My41IDE3Mi4yODFjMC00LjE0Mi0zLjM1OC03LjUtNy41LTcuNWgtMjU1Yy00LjE0MiAwLTcuNSAzLjM1OC03LjUgNy41czMuMzU4IDcuNSA3LjUgNy41aDI1NWM0LjE0MiAwIDcuNS0zLjM1OCA3LjUtNy41eiIvPjxwYXRoIGQ9Im0yNjYuMzY1IDIzMS40NDhoLTE4NS4zNjVjLTQuMTQyIDAtNy41IDMuMzU4LTcuNSA3LjVzMy4zNTggNy41IDcuNSA3LjVoMTg1LjM2NWM0LjE0MiAwIDcuNS0zLjM1OCA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNXoiLz48cGF0aCBkPSJtODEgMzEzLjExNWgxODUuMzY1YzQuMTQyIDAgNy41LTMuMzU4IDcuNS03LjVzLTMuMzU4LTcuNS03LjUtNy41aC0xODUuMzY1Yy00LjE0MiAwLTcuNSAzLjM1OC03LjUgNy41czMuMzU4IDcuNSA3LjUgNy41eiIvPjxwYXRoIGQ9Im04MSAzNzkuNzgxaDI1NWM0LjE0MiAwIDcuNS0zLjM1OCA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNWgtMjU1Yy00LjE0MiAwLTcuNSAzLjM1OC03LjUgNy41czMuMzU4IDcuNSA3LjUgNy41eiIvPjxwYXRoIGQ9Im00MDguNSAxNzUuMDY3di0xNDIuNTY3YzAtMTcuOTItMTQuNTgtMzIuNS0zMi41LTMyLjVoLTE2OS41MDVjLTQuMTQyIDAtNy41IDMuMzU4LTcuNSA3LjVzMy4zNTggNy41IDcuNSA3LjVoMTY5LjUwNWM5LjY0OSAwIDE3LjUgNy44NTEgMTcuNSAxNy41djE0Mi41NjdjLTUwLjI0IDMuODM4LTkwIDQ1LjkzNy05MCA5Ny4yMTQgMCA1MS43MDUgNDAuMTc2IDkzLjQwOCA5MCA5Ny4yMTR2MTEwLjAwNWMwIDkuNjQ5LTcuODUxIDE3LjUtMTcuNSAxNy41aC0zMzBjLTkuNjQ5IDAtMTcuNS03Ljg1MS0xNy41LTE3LjV2LTM2MWg3MWMxNy45MiAwIDMyLjUtMTQuNTggMzIuNS0zMi41di03MWgzOS40OTVjNC4xNDIgMCA3LjUtMy4zNTggNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjVoLTQ2Ljk5NWMtMS44ODYgMC0zLjg1My43NDUtNS4zMDMgMi4xOTdsLTEwMy41IDEwMy41Yy0xLjQyNSAxLjQyNC0yLjE5NyAzLjQxOC0yLjE5NyA1LjMwM3YzNjguNWMwIDE3LjkyIDE0LjU4IDMyLjUgMzIuNSAzMi41aDMzMGMxNy45MiAwIDMyLjUtMTQuNTggMzIuNS0zMi41di0xMTAuMDE3YzE1LjEwNC0xLjE2IDI5Ljc0Mi01LjgwMSA0Mi43MjMtMTMuNjE2IDMuNTQ4LTIuMTM2IDQuNjkzLTYuNzQ1IDIuNTU3LTEwLjI5NC0yLjEzNi0zLjU0Ny02Ljc0NC00LjY5NC0xMC4yOTQtMi41NTctMTIuNzg0IDcuNjk3LTI3LjQ3NSAxMS43NjUtNDIuNDg1IDExLjc2NS00NS40OTEgMC04Mi41LTM3LjAwOS04Mi41LTgyLjVzMzcuMDA5LTgyLjUgODIuNS04Mi41IDgyLjUgMzcuMDA5IDgyLjUgODIuNWMwIDE3Ljk0Ni01LjY2MSAzNS4wMDUtMTYuMzcgNDkuMzM1LTIuNDc5IDMuMzE4LTEuOCA4LjAxOCAxLjUxOCAxMC40OTggMy4zMTkgMi40NzkgOC4wMTkgMS43OTkgMTAuNDk4LTEuNTE4IDEyLjY2Mi0xNi45NDIgMTkuMzU0LTM3LjEwNyAxOS4zNTQtNTguMzE0LS4wMDEtNTEuMjM5LTM5LjczLTkzLjM3My05MC4wMDEtOTcuMjE1em0tMjkxLjUtMTQ5LjQ2MXY2MC4zOTRjMCA5LjY0OS03Ljg1MSAxNy41LTE3LjUgMTcuNWgtNjAuMzk0eiIvPjxwYXRoIGQ9Im00NDkuNzQ4IDI2NC43ODFoLTQxLjI0OHYtNDEuMjQ4YzAtNC4xNDItMy4zNTgtNy41LTcuNS03LjVzLTcuNSAzLjM1OC03LjUgNy41djQxLjI0OGgtNDEuMjQ4Yy00LjE0MiAwLTcuNSAzLjM1OC03LjUgNy41czMuMzU4IDcuNSA3LjUgNy41aDQxLjI0OHY0MS4yNDhjMCA0LjE0MiAzLjM1OCA3LjUgNy41IDcuNXM3LjUtMy4zNTggNy41LTcuNXYtNDEuMjQ4aDQxLjI0OGM0LjE0MiAwIDcuNS0zLjM1OCA3LjUtNy41cy0zLjM1OC03LjUtNy41LTcuNXoiLz48L2c+PC9zdmc+"
                         alt="" width="20px" height="20px" ></img>                        
                        <TextoMenu> Entradas </TextoMenu>
                    </ItemMenu>
                    <ItemMenu onclick="location.href='/index/objetivos'">
                        <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQzNy45NzQgMTgxLjU1NmMwLTEwMC4xMS04MS42MzMtMTgxLjU1Ni0xODEuOTc0LTE4MS41NTZzLTE4MS45NzMgODEuNDQ2LTE4MS45NzMgMTgxLjU1NmMwIDU3LjY4OSAyNy4xMDggMTA5LjE4IDY5LjI4MyAxNDIuNDZ2MTc3Ljk4NGMwIDMuMzI4IDEuNjU1IDYuNDM4IDQuNDE2IDguMjk1IDIuNzYgMS44NTggNi4yNjYgMi4yMjMgOS4zNDguOTY5bDk4LjkyNi00MC4xODMgOTguOTI4IDQwLjE4NGMxLjIxMy40OTMgMi40OS43MzUgMy43NjIuNzM1IDEuOTYyIDAgMy45MTEtLjU3NyA1LjU4NS0xLjcwNSAyLjc2LTEuODU4IDQuNDE2LTQuOTY4IDQuNDE2LTguMjk1di0xNzcuOTg0YzQyLjE3NS0zMy4yOCA2OS4yODMtODQuNzcxIDY5LjI4My0xNDIuNDZ6bS04OS4yODMgMzA1LjU4OS04OC45MjgtMzYuMTIyYy0yLjQxMy0uOTgtNS4xMTMtLjk4LTcuNTI2IDBsLTg4LjkyOCAzNi4xMjJ2LTE0OS4zOTZjMjcuMTY0IDE2LjEwNyA1OC44NjQgMjUuMzY0IDkyLjY5MSAyNS4zNjRzNjUuNTI3LTkuMjU3IDkyLjY5MS0yNS4zNjR6bS05Mi42OTEtMTQ0LjAzMmMtODkuMzEzIDAtMTYxLjk3NC03Mi40NzQtMTYxLjk3NC0xNjEuNTU3czcyLjY2Mi0xNjEuNTU2IDE2MS45NzQtMTYxLjU1NiAxNjEuOTc0IDcyLjQ3NCAxNjEuOTc0IDE2MS41NTYtNzIuNjYxIDE2MS41NTctMTYxLjk3NCAxNjEuNTU3eiIvPjxwYXRoIGQ9Im0yNTYgNDUuODM3Yy03NS4wMDQgMC0xMzYuMDI1IDYwLjg4My0xMzYuMDI1IDEzNS43MTlzNjEuMDIxIDEzNS43MiAxMzYuMDI1IDEzNS43MiAxMzYuMDI1LTYwLjg4NCAxMzYuMDI1LTEzNS43Mi02MS4wMi0xMzUuNzE5LTEzNi4wMjUtMTM1LjcxOXptMCAyNTEuNDM5Yy02My45NzcgMC0xMTYuMDI1LTUxLjkxMi0xMTYuMDI1LTExNS43MnM1Mi4wNDgtMTE1LjcxOSAxMTYuMDI1LTExNS43MTkgMTE2LjAyNSA1MS45MTIgMTE2LjAyNSAxMTUuNzE5YzAgNjMuODA4LTUyLjA0OCAxMTUuNzItMTE2LjAyNSAxMTUuNzJ6Ii8+PHBhdGggZD0ibTMwOS40OTUgMTU0LjgtMjYuMTkxLTQuMTk3LTEyLjEwNy0yMy41NzRjLTIuOTM5LTUuNzI0LTguNzYyLTkuMjgtMTUuMTk2LTkuMjhzLTEyLjI1NyAzLjU1Ni0xNS4xOTYgOS4yNzlsLTEyLjEwNyAyMy41NzUtMjYuMTkxIDQuMTk3Yy02LjM2NiAxLjAyMS0xMS41NTcgNS40NjQtMTMuNTQ2IDExLjU5NnMtLjM5NiAxMi43NzYgNC4xNTggMTcuMzM5bDE4LjY5MSAxOC43MjgtNC4wODkgMjYuMTI1Yy0uOTk2IDYuMzYyIDEuNjIgMTIuNjY3IDYuODI3IDE2LjQ1NiAyLjk4OCAyLjE3NCA2LjUwMSAzLjI4MSAxMC4wNCAzLjI4MSAyLjYyOCAwIDUuMjY5LS42MTEgNy43MTgtMS44NDlsMjMuNjk0LTExLjk3OCAyMy42OTUgMTEuOTc5YzUuNzQ3IDIuOTA1IDEyLjU1IDIuMzU2IDE3Ljc1OC0xLjQzMiA1LjIwNy0zLjc4OSA3LjgyMy0xMC4wOTQgNi44MjctMTYuNDU2bC00LjA4OS0yNi4xMjYgMTguNjktMTguNzI4YzQuNTU1LTQuNTYzIDYuMTQ4LTExLjIwOCA0LjE1OS0xNy4zNC0xLjk4OS02LjEzMS03LjE3OS0xMC41NzUtMTMuNTQ1LTExLjU5NXptLTI3LjA0NiAzNy4xMjljLTIuMjU0IDIuMjU4LTMuMjk1IDUuNDU4LTIuODAyIDguNjFsMy45OTUgMjUuNTIxLTIzLjEzLTExLjY5M2MtMS40MTgtLjcxNy0yLjk2NS0xLjA3Ni00LjUxMi0xLjA3Ni0xLjU0NiAwLTMuMDkzLjM1OC00LjUxMiAxLjA3NmwtMjMuMTMgMTEuNjkzIDMuOTk1LTI1LjUyMWMuNDkzLTMuMTUzLS41NDgtNi4zNTItMi44MDItOC42MWwtMTguMjQ4LTE4LjI4NCAyNS41NTktNC4wOTZjMy4xNDMtLjUwNCA1Ljg1OS0yLjQ3NCA3LjMxMy01LjMwNmwxMS44MjUtMjMuMDI2IDExLjgyNSAyMy4wMjZjMS40NTQgMi44MzIgNC4xNyA0LjgwMiA3LjMxMyA1LjMwNmwyNS41NTkgNC4wOTZ6Ii8+PC9nPjwvc3ZnPg=="
                         alt="" width="20px" height="20px" ></img>                      
                        <TextoMenu> Objetivos </TextoMenu>
                    </ItemMenu>
                    <ItemMenu onclick="location.href='/index/configuracoes'">  
                        <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiPjxwYXRoIGQ9Ik0xMDkuNjc1LDU1LjU3NCw5OS41Nyw1My41MzZhMzYuODI1LDM2LjgyNSwwLDAsMC0zLjAyNC03LjI4MWw1LjcxLTguNTk0YTEuNzQ5LDEuNzQ5LDAsMCwwLS4yMi0yLjJsLTkuNDkyLTkuNDkyYTEuNzQ5LDEuNzQ5LDAsMCwwLTIuMi0uMjJsLTguNTk0LDUuNzFhMzYuODI1LDM2LjgyNSwwLDAsMC03LjI4MS0zLjAyNGwtMi4wMzgtMTAuMWExLjc0OSwxLjc0OSwwLDAsMC0xLjcxNS0xLjRINTcuMjg5YTEuNzQ5LDEuNzQ5LDAsMCwwLTEuNzE1LDEuNEw1My41MzYsMjguNDNhMzYuODI1LDM2LjgyNSwwLDAsMC03LjI4MSwzLjAyNGwtOC41OTQtNS43MWExLjc0OCwxLjc0OCwwLDAsMC0yLjIuMjJsLTkuNDkyLDkuNDkyYTEuNzQ5LDEuNzQ5LDAsMCwwLS4yMiwyLjJsNS43MSw4LjU5NGEzNi44MjUsMzYuODI1LDAsMCwwLTMuMDI0LDcuMjgxbC0xMC4xLDIuMDM4YTEuNzQ5LDEuNzQ5LDAsMCwwLTEuNCwxLjcxNVY3MC43MTFhMS43NDksMS43NDksMCwwLDAsMS40LDEuNzE1TDI4LjQzLDc0LjQ2NGEzNi44MjUsMzYuODI1LDAsMCwwLDMuMDI0LDcuMjgxbC01LjcxLDguNTk0YTEuNzQ5LDEuNzQ5LDAsMCwwLC4yMiwyLjJsOS40OTIsOS40OTJhMS43NDgsMS43NDgsMCwwLDAsMi4yLjIybDguNTk0LTUuNzFhMzYuODI1LDM2LjgyNSwwLDAsMCw3LjI4MSwzLjAyNGwyLjAzOCwxMC4xMDVhMS43NDksMS43NDksMCwwLDAsMS43MTUsMS40SDcwLjcxMWExLjc0OSwxLjc0OSwwLDAsMCwxLjcxNS0xLjRMNzQuNDY0LDk5LjU3YTM2LjgyNSwzNi44MjUsMCwwLDAsNy4yODEtMy4wMjRsOC41OTQsNS43MWExLjc1MiwxLjc1MiwwLDAsMCwyLjItLjIybDkuNDkyLTkuNDkyYTEuNzQ5LDEuNzQ5LDAsMCwwLC4yMi0yLjJsLTUuNzEtOC41OTRhMzYuODI1LDM2LjgyNSwwLDAsMCwzLjAyNC03LjI4MWwxMC4xMDUtMi4wMzhhMS43NDksMS43NDksMCwwLDAsMS40LTEuNzE1VjU3LjI4OUExLjc0OSwxLjc0OSwwLDAsMCwxMDkuNjc1LDU1LjU3NFptLTIuMSwxMy43LTkuNzU0LDEuOTY3YTEuNzQ3LDEuNzQ3LDAsMCwwLTEuMzQ2LDEuMjczLDMzLjQsMzMuNCwwLDAsMS0zLjUsOC40MTUsMS43NDgsMS43NDgsMCwwLDAsLjA1MywxLjg1Mmw1LjUxMSw4LjMtNy40NjUsNy40NjUtOC4zLTUuNTExYTEuNzQ4LDEuNzQ4LDAsMCwwLTEuODUyLS4wNTMsMzMuNCwzMy40LDAsMCwxLTguNDE1LDMuNSwxLjc0NywxLjc0NywwLDAsMC0xLjI3MywxLjM0NmwtMS45NjcsOS43NTRINTguNzIxbC0xLjk2Ny05Ljc1NGExLjc0NywxLjc0NywwLDAsMC0xLjI3My0xLjM0NiwzMy40LDMzLjQsMCwwLDEtOC40MTUtMy41LDEuNzUxLDEuNzUxLDAsMCwwLTEuODUyLjA1M2wtOC4zLDUuNTExLTcuNDY1LTcuNDY1LDUuNTExLTguM2ExLjc0OCwxLjc0OCwwLDAsMCwuMDUzLTEuODUyLDMzLjQsMzMuNCwwLDAsMS0zLjQ5NS04LjQxNSwxLjc0NywxLjc0NywwLDAsMC0xLjM0Ni0xLjI3M2wtOS43NTQtMS45NjdWNTguNzIxbDkuNzU0LTEuOTY3YTEuNzQ3LDEuNzQ3LDAsMCwwLDEuMzQ2LTEuMjczLDMzLjQsMzMuNCwwLDAsMSwzLjQ5NS04LjQxNSwxLjc0OCwxLjc0OCwwLDAsMC0uMDUzLTEuODUybC01LjUxMS04LjMsNy40NjUtNy40NjUsOC4zLDUuNTExYTEuNzQ2LDEuNzQ2LDAsMCwwLDEuODUyLjA1MywzMy40LDMzLjQsMCwwLDEsOC40MTUtMy40OTUsMS43NDcsMS43NDcsMCwwLDAsMS4yNzMtMS4zNDZsMS45NjctOS43NTRINjkuMjc5bDEuOTY3LDkuNzU0YTEuNzQ3LDEuNzQ3LDAsMCwwLDEuMjczLDEuMzQ2LDMzLjQsMzMuNCwwLDAsMSw4LjQxNSwzLjQ5NSwxLjc0NiwxLjc0NiwwLDAsMCwxLjg1Mi0uMDUzbDguMy01LjUxMSw3LjQ2NSw3LjQ2NS01LjUxMSw4LjNhMS43NDgsMS43NDgsMCwwLDAtLjA1MywxLjg1MiwzMy40LDMzLjQsMCwwLDEsMy41LDguNDE1LDEuNzQ3LDEuNzQ3LDAsMCwwLDEuMzQ2LDEuMjczbDkuNzU0LDEuOTY3WiIvPjxwYXRoIGQ9Ik02NCwzOS44NzdBMjQuMTIzLDI0LjEyMywwLDEsMCw4OC4xMjMsNjQsMjQuMTUxLDI0LjE1MSwwLDAsMCw2NCwzOS44NzdabTAsNDQuNzQ2QTIwLjYyMywyMC42MjMsMCwxLDEsODQuNjIzLDY0LDIwLjY0NywyMC42NDcsMCwwLDEsNjQsODQuNjIzWiIvPjxwYXRoIGQ9Ik02NCw0Ny4yMTVBMTYuNzg1LDE2Ljc4NSwwLDEsMCw4MC43ODUsNjQsMTYuOCwxNi44LDAsMCwwLDY0LDQ3LjIxNVptMCwzMC4wN0ExMy4yODUsMTMuMjg1LDAsMSwxLDc3LjI4NSw2NCwxMy4zLDEzLjMsMCwwLDEsNjQsNzcuMjg1WiIvPjwvc3ZnPgo="
                         alt="" width="20px" height="20px" ></img>                    
                        <TextoMenu> Configurações </TextoMenu>
                    </ItemMenu>
                </MenuModulos>
            </MenuGeral>
        </BackgroundContainerStyle>
    );
}

export default MenuLateral;
