const db = require('../connectdb');

const getAssistant = async (req, res) => {
    try {
        const id = req.params.assistantId;

        const [ resp ] = await db.query(`SELECT * FROM assistant WHERE assistant_id = ${id}`);
        if(resp.length > 0)
            res.status(200).send({ data: resp });
        else res.status(404).send({ data: "No record with id: " + id});
        
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error: " + error});
    }
}

module.exports = getAssistant;