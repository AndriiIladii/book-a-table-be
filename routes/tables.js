import express from "express";

import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let tables = [];

router.post("/", (req, res) => {
  const table = req.body;

  tables.push({ ...table, id: uuidv4() });

  res.send(`${table.name} has been added to the Database`);
});

router.get("/", (req, res) => {
  res.send(tables);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundTable = tables.find((table) => table.id === id);

  res.send(foundTable);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  tables = tables.filter((table) => table.id !== id);

  res.send(`${id} deleted successfully from database`);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;

  const { name, tableNumber, phoneNumber } = req.body;

  const table = tables.find((table) => table.id === id);

  if (name) table.name = name;
  if (tableNumber) table.tableNumber = tableNumber;
  if (phoneNumber) table.phoneNumber = phoneNumber;

  res.send(`User with the ${id} has been updated`);
});

export default router;
