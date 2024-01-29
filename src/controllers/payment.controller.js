import Stripe from "stripe";
import { STRIPE_PRIVATE_KEY } from "../config.js";

const stripe = new Stripe(STRIPE_PRIVATE_KEY);

export const createSession = async (req, res) => {
  const items = req.body;
  console.log(items);
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: items,
      mode: "payment",
      success_url:
        //"http://localhost:3000/success",
        "https://danielbarretoes-nodejs-stripe-checkout.onrender.com/success",
      cancel_url:
        //"http://localhost:3000/cancel",
        "https://danielbarretoes-nodejs-stripe-checkout.onrender.com/cancel",
    });
    console.log(session);
    return res.json({ url: session.url });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const success = (req, res) => {
  res.redirect("/success.html");
};

export const cancel = (req, res) => {
  res.redirect("/cancel.html");
};
