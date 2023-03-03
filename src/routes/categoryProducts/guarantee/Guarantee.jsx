import React from "react";
import "./Guarantee.scss";
import box from "./box.svg"

const Guarantee = () => {
    return (
        <div className="guarantee">
            <img src={box} alt="" />
            <div className="title-wrapper">
                <h2>Simplify Your Life With a High-Tech Apple Product</h2>
                <p>Apple products are designed with many convenient features like VoiceOver, Face ID, and Live Listen. The iPhone XS Max, iPhone XR, and iMac 2019 are some of their devices that have helpful features for using technology easily. You can find a wide variety of used and new Apple products on eBay, including new releases.</p>
                <div className="info">
                    <p><strong>Types of Apple products</strong> Categories of products from Apple include:</p>
                    <ul>
                        <li>
                            <p><strong>Smartphones:</strong> iPhones are available in a variety of sizes, so you can choose one that you find comfortable to use. Screen size can range from 5.8 inches to 6.5 inches.</p>
                        </li>
                        <li>
                            <p><strong>Computers:</strong> Apple manufactures desktops and laptops. The iMac 2019 release includes an option for a 5K retina display and a 3.6GHz 8-core processor. Available sizes are 21.5 inches and 27 inches.</p>
                        </li>
                        <li>
                            <p><strong>Headphones:</strong> This brand has a line of wireless headphones, including the AirPods 2nd gen. For an additional cost, you can choose an AirPods 2nd-generation product with a wireless charging station. eBay has new AirPods available as well as many other Apple products in both pre-owned and new condition.</p>
                        </li>
                        <li>
                            <p><strong>Tablets:</strong> The brand's tablets include the iPad Air 3rd gen and the iPad Mini 5th gen. Display sizes range from 7.9 inches to 9.7 inches.</p>
                        </li>
                        <li>
                            <p><strong>Apple TV:</strong> With an Apple TV product, you can watch TV shows in 4K HDR resolution and immersive sound. You can also use Apple's AirPlay feature to display content from your other Apple devices on the TV screen.</p>
                        </li>
                    </ul>
                </div>
                <span>Accessibility features of Apple products</span>
                <p>Apple products have a wide range of accessibility features that are helpful if you are colorblind, vision-impaired, deaf, or need other access capabilities. You can change the color filter on your screen to one that is suitable for vision challenges or color blindness. In addition to the iPhone, the Apple TV, Apple Watch, Mac, and iPad offer these accessibility features. Other options to help with vision include a screen magnifier, Larger Dynamic Type, and VoiceOver. Apple devices have Live Listen to make it easier for you to hear the audio in loud environments. They also have a FaceTime feature so that you can communicate with sign language on camera. Mac computers have an accessibility keyboard that shows on the screen, allowing you to navigate without using a physical keyboard.</p>
                <span>How secure are Apple products?</span>
                <p>Apple equips its products with numerous security features, such as file-level data protection, Touch ID, and Face ID. You can unlock your phone via a face scan when you use the Face ID feature while Touch ID recognizes your fingerprint. You can use Touch ID as an access authorization feature for unlocking your device, making Apple Pay payments, and more.</p>
                <span>Content provided for informational purposes only. eBay is not affiliated with or endorsed by Apple.</span>
            </div>
        </div>
    )
}

export default Guarantee