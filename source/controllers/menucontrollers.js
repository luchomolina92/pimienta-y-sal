
const fs = require('fs');
const path = require('path');

const menu_db = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'data', 'menu.json'), 'utf-8'));

const index = (req, res) => {
    const local = {
        menu_db,
        title: 'pimienta y sal'
    }
    res.render('index', local)
}

const detalleMenu = (req, res) => {
    const local = {
        menu_db: menu_db.find(menu=>menu.id===Number(req.params.id)),
        title: 'pimienta y sal'
    }
    res.render('detalleMenu', local)
}





module.exports = {
    index,
    detalleMenu
}