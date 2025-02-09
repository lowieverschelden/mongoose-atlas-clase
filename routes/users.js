const express = require("express");
const router = express.Router();
const User = require("../models/User.js"); 

// 📌 Endpoint: Maak een nieuwe gebruiker
router.post("/create", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Fout bij het aanmaken van de gebruiker" });
    }
});

// 📌 Endpoint: Haal alle gebruikers op
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(500).send({ message: "Fout bij het ophalen van gebruikers" });
    }
});

// 📌 Endpoint: Haal een gebruiker op basis van ID
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send({ message: "Gebruiker niet gevonden" });
        res.send(user);
    } catch (error) {
        res.status(500).send({ message: "Fout bij het ophalen van gebruiker" });
    }
});

// 📌 Endpoint: Update een gebruiker
router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(updatedUser);
    } catch (error) {
        res.status(500).send({ message: "Fout bij het bijwerken van gebruiker" });
    }
});

// 📌 Endpoint: Verwijder een gebruiker
router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.send({ message: "Gebruiker verwijderd" });
    } catch (error) {
        res.status(500).send({ message: "Fout bij het verwijderen van gebruiker" });
    }
});

module.exports = router;
