const db = require('../connectdb');

const updateAssitant = async (req, res) => {
    try {
        const id = req.params.assistantId;
        const values = [
            req.body.assistant_id,
            req.body.first_name,
            req.body.last_name,
            req.body.email,
            req.body.mobile,
            req.body.address,
            req.body.role,
            req.body.department,
            req.body.salary,
            req.body.city,
            req.body.country
        ];
        console.log('this');

        const q = 'UPDATE assistant SET `assistant_id` = ?, `first_name` = ?, `last_name` = ?, `email` = ?, `mobile` = ?, `address` = ?, `role` = ?, `department` = ?, `salary` = ?, `city` = ?, `country` = ? WHERE assistant_id = ?'
        const [ resp ] = await db.query(q, [ ...values, id]);

        if (resp.affectedRows) {
            res.status(200).json({ message: 'Record added' });
        }
        else {
            res.status(404).json({ message: 'Record already exists' });
        }

    } catch (error) {
        res.status(500).send({ error: "Internal Server Error: " + error});
    }
}

module.exports = updateAssitant;