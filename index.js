import express from "express";
// import pg from "pg";
import dotenv from "dotenv";

dotenv.config();
// const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;
const PORT = process.env.PORT || 5000;
const isDev = process.env.NODE_ENV !== 'production';

// let config;
// if (isDev) {
// 	config = {
// 		host: DB_HOST,
// 		user: DB_USER,
// 		password: DB_PASS,
// 		database: DB_NAME
// 	};
// } else {
// 	config = {
// 		connectionString: DATABASE_URL,
// 		ssl: { rejectUnauthorized: false }
// 	};
// }
// const pool = new pg.Pool(config);
const app = express();

// function findInvalidAttribute(object, attribute, validator = (v) => (v !== undefined && v !== '')) {
// 	let missingAttribute = [];
// 	for (let attr of attribute) {
// 		if (!validator(object[attr])) {
// 			missingAttribute.push(attr);
// 		}
// 	}
// 	return missingAttribute;
// }

app.use(express.json());

// app.post("/path", async (req, res) => {
// 	let attr = findInvalidAttribute(req.body, ["nama_atribut", "nama_atribut", "nama_atribut"]);
// 	if (attr.length > 0) {
// 		res.status(400).json("Missing attribute: " + attr.join(", "));
// 		return;
// 	}

// 	try {
// 		const client = await pool.connect();

// 		try {
// 			const { nama_atribut, nama_atribut, nama_atribut } = req.body;

// 			let data = { nama_atribut, nama_atribut, nama_atribut };
// 			let values = Object.values(data);
// 			let pg_vars = values.map((elm, idx) => `$${idx + 1}`);
// 			await client.query(`INSERT INTO nama_tabel(${Object.keys(data).join(',')}) VALUES (${pg_vars.join(",")})`, values);

// 			res.sendStatus(200);
// 		} catch (err) {
// 			console.log(err);
// 			res.status(500).json("Error: " + err.message);
// 		} finally {
// 			client.release();
// 		}
// 	} catch (err) {
// 		res.status(500).json("Unable to connect to db: " + err);
// 	}
// });

// app.put("/path", async (req, res) => {
// 	let attr = findInvalidAttribute(req.body, ["nama_atribut", "nama_atribut", "nama_atribut"]);
// 	if (attr.length > 0) {
// 		res.status(400).json("Missing attribute: " + attr.join(", "));
// 		return;
// 	}

// 	try {
// 		const client = await pool.connect();

// 		try {
// 			const { nama_atribut, nama_atribut, nama_atribut } = req.body;

// 			let data = { nama_atribut, nama_atribut, nama_atribut };

// 			let values = Object.values(data);
// 			let pg_vars = Object.keys(data).map((elm, idx) => `${elm[0]} = $${idx + 2}`);
// 			let result = await client.query(`UPDATE nama_tabel SET ${pg_vars.join(',')} WHERE nama_kolom = $1`, [nama_kolom, ...values]);

// 			if (result.rowCount === 0) {
// 				res.status(400).json("Item not exists");
// 				return;
// 			}

// 			res.sendStatus(200);
// 		} catch (err) {
// 			console.log(err);
// 			res.status(500).json("Error: " + err.message);
// 		} finally {
// 			client.release();
// 		}
// 	} catch (err) {
// 		res.status(500).json("Unable to connect to db: " + err);
// 	}
// });

// app.get("/path", (req, res) => {
// 	let attr = findInvalidAttribute(req.query, ["nama_atribut", "nama_atribut", "nama_atribut"]);
// 	if (attr.length > 0) {
// 		res.status(400).json("Missing attribute: " + attr.join(", "));
// 		return;
// 	}

// 	try {
// 		const client = await pool.connect();

// 		try {
// 			const { nama_atribut, nama_atribut, nama_atribut } = req.query;

// 			let result = await client.query("SELECT * FROM nama_tabel WHERE nama_atribut = $1", [value]);

// 			if (result.rows.length === 0) {
// 				res.status(404).json("Item not found");
// 				return;
// 			}

// 			res.status(200).json(result.rows[0]);
// 		} catch (err) {
// 			console.log(err);
// 			res.status(500).json("Error: " + err.message);
// 		} finally {
// 			client.release();
// 		}
// 	} catch (err) {
// 		res.status(500).json("Unable to connect to db: " + err);
// 	}
// });

// app.delete("/path", (req, res) => {
// 	let attr = findInvalidAttribute(req.query, ["nama_kolom"]);
// 	if (attr.length > 0) {
// 		res.status(400).json("Missing attribute: " + attr.join(", "));
// 		return;
// 	}

// 	try {
// 		const client = await pool.connect();

// 		try {
// 			const { nama_atribut, nama_atribut, nama_atribut } = req.query;

// 			await client.query(`DELETE FROM nama_tabel WHERE nama_kolom = $1`, [value]);
// 			res.sendStatus(200);
// 		} catch (err) {
// 			console.log(err);
// 			res.status(500).json("Error: " + err.message);
// 		} finally {
// 			client.release();
// 		}
// 	} catch (err) {
// 		res.status(500).json("Unable to connect to db: " + err);
// 	}
// });

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));