
import React, { useEffect } from "react";

const Facilities = () => {
    useEffect(() => {
        document.title = "Cooked_Facilities";
    }, []);
    return (
        <div className="container">
            <div>
                <h3 className="text-center mt-5 fw-bold mb-5">
                    Facilities
                </h3>
                <h4 className="mt-5 fw-bold">1. State-of-the-Art Kitchen</h4>
                <p className="fs-5 ">
                    Our meals are prepared in a state-of-the-art kitchen, equipped with the latest technology and maintained to the highest standards of hygiene. Our chefs use only the freshest ingredients to create meals that are both delicious and nutritious.


                </p>

                <h4 className="mt-5 fw-bold">2. Eco-Friendly Packaging
                </h4>
                <p className="fs-5">
                    We are committed to sustainability. All our meals are packaged in eco-friendly, biodegradable containers that keep your food fresh while minimizing our environmental footprint.


                </p>

                <h4 className="mt-5 fw-bold">3. Fast & Reliable Delivery</h4>
                <p className="fs-5">
                    We offer fast and reliable delivery services to ensure that your meals arrive hot and on time. Our delivery partners are trained to handle your food with care, and we provide real-time tracking so you can monitor your order’s progress.
                </p>

                <h4 className="mt-5 fw-bold">
                    4. Customizable Meal Plans
                </h4>
                <p className="fs-5">
                    We understand that every customer has unique needs. That’s why we offer customizable meal plans that allow you to choose meals that fit your dietary preferences, portion sizes, and schedule.
                </p>

                <h4 className="mt-5 fw-bold">
                    5. Dedicated Customer Support
                </h4>
                <p className="fs-5">
                    Our customer support team is always ready to assist you. Whether you have a question about your order, need help with our website, or want to provide feedback, we’re here to help. You can reach us through our hotline, email, or live chat.
                </p>

                <h4 className="mt-5 fw-bold">6. Rewards Program</h4>
                <p className="fs-5">
                    As part of our commitment to customer satisfaction, we offer a rewards program that allows you to earn points with every purchase. These points can be redeemed for discounts, special offers, and more.
                </p>

                <h4 className="mt-5 fw-bold">
                    7. High-Quality Ingredients
                </h4>
                <p className="fs-5">
                    We source our ingredients from trusted suppliers who share our commitment to quality and sustainability. From farm-fresh vegetables to premium meats, we use only the best ingredients in our dishes.
                </p>

                <h4 className="mt-5 fw-bold">
                    8. Safe and Secure Payment Options
                </h4>
                <p className="fs-5">
                    Your security is our priority. We offer a range of secure payment options, including credit/debit cards, digital wallets, and bank transfers, to ensure your personal information is protected.
                </p>

                <h4 className="mt-5 fw-bold">9. Regular Promotions & Discounts</h4>
                <p className="fs-5">
                    We love to reward our customers! Enjoy regular promotions, discounts, and exclusive deals that make your dining experience with us even more enjoyable.
                </p>

                <h4 className="mt-5 fw-bold">

                    10. Hygiene and Safety Standards

                </h4>
                <p className="fs-5">

                    We adhere to strict hygiene and safety standards in every step of our food preparation and delivery process. From kitchen cleanliness to safe packaging, your health and safety are our top priorities.
                </p>
            </div>
        </div>
    );
};

export default Facilities;


