const db = require('../connectdb');

const deleteAssitant = async (req, res) => {
    try {
        const id = req.params.assistantId;
        // const id = 1;
        const body = req.body;
        console.log(id);

        const [ resp ] = await db.query(`DELETE FROM assistant WHERE assistant_id = ${id}`);
        // console.log(resp.affectedRows);

        if(resp.affectedRows)
            res.status(200).send({ message: 'Record deleted' });
        else 
            res.status(404).send({ message: 'Record does not exists for id: ' + id });
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error: " + error});
    }
}

module.exports = deleteAssitant;