import React, { useEffect } from "react";

const FAQ = () => {
    useEffect(() => {
        document.title = "Cooked_FAQ";
    }, []);
    return (
        <div className="container">
            <div>
                <h2 className="text-center mt-5 fw-bold mb-5">
                    Frequently Asked Questions (FAQ)
                </h2>
                <h4 className="mt-4 fw-bold">1. What is Cooked?</h4>
                <p>
                    Cooked is a platform where you can discover and order a variety of
                    delicious, freshly-prepared meals made by our expert chefs. We aim to
                    provide high-quality, nutritious food delivered right to your
                    doorstep.
                </p>

                <h4 className="mt-4 fw-bold">2. How do I place an order?</h4>
                <p>
                    Simply browse through our menu, select your desired dishes, add them
                    to your cart, and proceed to checkout. You can choose your preferred
                    delivery time and payment method during checkout.
                </p>

                <h4 className="mt-4 fw-bold">3. What payment methods do you accept?</h4>
                <p>
                    We accept all major credit/debit cards, digital wallets, and bank
                    transfers. You can also opt for cash on delivery in certain areas.
                </p>

                <h4 className="mt-4 fw-bold">
                    4. Can I schedule a delivery for a later date?
                </h4>
                <p>
                    Yes, you can schedule your delivery during the checkout process. Just
                    select the date and time that works best for you.
                </p>

                <h4 className="mt-4 fw-bold">
                    5. What if I have dietary restrictions or allergies?
                </h4>
                <p>
                    We offer a variety of dishes to accommodate different dietary needs,
                    including vegetarian, vegan, gluten-free, and low-carb options. Please
                    check the ingredient list for each dish, and feel free to contact us
                    if you have specific concerns.
                </p>

                <h4 className="mt-4 fw-bold">6. How is the food packaged?</h4>
                <p>
                    Our meals are carefully packaged in eco-friendly containers that keep
                    the food fresh and warm. We also ensure that all packaging is
                    tamper-proof and hygienic.
                </p>

                <h4 className="mt-4 fw-bold">
                    7. What if my order is late or incorrect?
                </h4>
                <p>
                    We strive to deliver your meals on time and accurately. If there’s an
                    issue with your order, please contact our customer support team
                    immediately, and we will resolve the issue as quickly as possible.
                </p>

                <h4 className="mt-4 fw-bold">
                    8. Do you offer any discounts or promotions?
                </h4>
                <p>
                    Yes, we regularly offer discounts and promotions. Keep an eye on our
                    website or sign up for our newsletter to stay updated on the latest
                    deals.
                </p>

                <h4 className="mt-4 fw-bold">9. Can I track my order?</h4>
                <p>
                    Yes, once your order is placed, you can track its status through your
                    account on our website. We’ll also send you updates via email or SMS.
                </p>

                <h4 className="mt-4 fw-bold">
                    {" "}
                    10. How do I contact customer support?
                </h4>
                <p>
                    {" "}
                    You can reach our customer support team via the contact form on our
                    website, email, or by calling our hotline. We’re here to help with any
                    questions or issues you might have.
                </p>
            </div>
        </div>
    );
};

export default FAQ;
