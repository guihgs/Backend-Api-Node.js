const Dev = require('../models/Dev');

module.exports = {
    async store(req, res) {
        //console.log(req.params.devId);
        //console.log(req.headers.user);

        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        //Validation if user doesnt exist
        if(!targetDev) {
            return res.status(400).json({error: 'Dev not exists' });
        }
        //condition to see it its a match
        if(targetDev.likes.includes(loggedDev._id)){
            console.log('DEU MATCH');
        }
        //add like to user 
        loggedDev.likes.push(targetDev._id);

        //salvar informacoes 
        await loggedDev.save();

        return res.json(loggedDev);
        //return res.json({ ok: true});
    }
};