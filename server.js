require("dotenv").config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create Stripe Checkout Session
app.post("/create-checkout-session", async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: `Parking Spot - ${req.body.location}`,
                        },
                        unit_amount: req.body.amount * 100, // Convert to paisa
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: "http://localhost:5500/success.html",
            cancel_url: "http://localhost:5500/parking_info.html",
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));