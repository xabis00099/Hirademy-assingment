const db = require('../connectdb');

const addAssitant = async (req, res) => {
    try {
        console.log('this');
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
        // console.log(values);

        const q = 'INSERT INTO assistant (`assistant_id`, `first_name`, `last_name`, `email`, `mobile`, `address`, `role`, `department`, `salary`, `city`, `country`) VALUES (?)';
        const [resp] = await db.query(q, [values]);
        console.log(resp);
        
        if (resp.affectedRows) {
            res.status(200).send({ message: "Record added for the id " + req.body.assistant_id});
        }
        else {
            res.status(409).json({ message: 'Record already exists' });
        }
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ message: 'Record already exists' });
        } else {
            res.status(500).send({ error: "Internal Server Error: " + error });
        }
    }
}

module.exports = addAssitant;