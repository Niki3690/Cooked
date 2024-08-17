import React from 'react'

const FAQ = () => {
    return (
        <div>
            <div className='container'>
                <h3 className="text-center mt-5 fw-bold mb-5">
                    Frequently Asked Questions (FAQ)
                </h3>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h4 className="mt-4 fw-bold">1. What is Cooked?</h4>
                            </button>
                        </h3>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className="fs-5">
                                    <i class="fa-solid fa-caret-right fs-5 me-1"></i>  Cooked is a platform where you can discover and order a variety of delicious, freshly-prepared meals made by our expert chefs. We aim to provide high-quality, nutritious food delivered right to your doorstep.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h4 className="mt-4 fw-bold">2. How do I place an order?</h4>
                            </button>
                        </h3>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className="fs-5">
                                    <i class="fa-solid fa-caret-right fs-5 me-1"></i>  Simply browse through our menu, select your desired dishes, add them to your cart, and proceed to checkout. You can choose your preferred delivery time and payment method during checkout.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h4 className="mt-4 fw-bold">3. What payment methods do you accept?</h4>
                            </button>
                        </h3>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className="fs-5">
                                    <i class="fa-solid fa-caret-right fs-5 me-1"></i>
                                    We accept all major credit/debit cards, digital wallets, and bank transfers. You can also opt for cash on delivery in certain areas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForth" aria-expanded="false" aria-controls="collapseForth">
                                <h4 className="mt-4 fw-bold">4. Can I schedule a delivery for a later date?</h4>
                            </button>
                        </h3>
                        <div id="collapseForth" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className="fs-5">
                                    <i class="fa-solid fa-caret-right fs-5 me-1"></i>
                                    Yes, you can schedule your delivery during the checkout process. Just select the date and time that works best for you.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFifth" aria-expanded="false" aria-controls="collapseFifth">
                                <h4 className="mt-4 fw-bold">5. What if I have dietary restrictions or allergies?</h4>
                            </button>
                        </h3>
                        <div id="collapseFifth" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className="fs-5">
                                    <i class="fa-solid fa-caret-right fs-5 me-1"></i>
                                    We offer a variety of dishes to accommodate different dietary needs, including vegetarian, vegan, gluten-free, and low-carb options. Please check the ingredient list for each dish, and feel free to contact us if you have specific concerns.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <h4 className="mt-4 fw-bold">6. How is the food packaged?</h4>
                            </button>
                        </h3>
                        <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className="fs-5">
                                    <i class="fa-solid fa-caret-right fs-5 me-1"></i>
                                    Our meals are carefully packaged in eco-friendly containers that keep the food fresh and warm. We also ensure that all packaging is tamper-proof and hygienic.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                <h4 className="mt-4 fw-bold">7. What if my order is late or incorrect?</h4>
                            </button>
                        </h3>
                        <div id="collapseSeven" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className="fs-5">
                                    <i class="fa-solid fa-caret-right fs-5 me-1"></i>
                                    We strive to deliver your meals on time and accurately. If there’s an issue with your order, please contact our customer support team immediately, and we will resolve the issue as quickly as possible.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                <h4 className="mt-4 fw-bold">8. Do you offer any discounts or promotions?
                                </h4>
                            </button>
                        </h3>
                        <div id="collapseEight" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className="fs-5">
                                    <i class="fa-solid fa-caret-right fs-5 me-1"></i>
                                    Yes, we regularly offer discounts and promotions. Keep an eye on our website or sign up for our newsletter to stay updated on the latest deals.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                <h4 className="mt-4 fw-bold">9. Can I track my order?</h4>
                            </button>
                        </h3>
                        <div id="collapseNine" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className="fs-5">
                                    <i class="fa-solid fa-caret-right fs-5 me-1"></i>
                                    Yes, once your order is placed, you can track its status through your account on our website. We’ll also send you updates via email or SMS.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="accordion-item">
                        <h3 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTens" aria-expanded="false" aria-controls="collapseTens">
                                <h4 className="mt-4 fw-bold">10. How do I contact customer support?</h4>
                            </button>
                        </h3>
                        <div id="collapseTens" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <p className="fs-5">
                                    <i class="fa-solid fa-caret-right fs-5 me-1"></i>
                                    You can reach our customer support team via the contact form on our website, email, or by calling our hotline. We’re here to help with any questions or issues you might have.
                                </p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default FAQ
