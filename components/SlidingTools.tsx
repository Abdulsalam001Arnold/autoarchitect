"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const toolsRow1 = [
    {name: 'blob', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f6a68fbe0cbedc9ca2ddb3_mailchimp_svg_574c2a4641.svg"},
    {name: 'sql', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f57a05be2624ab9ba447bb_my_Sql_svg_d9740ad4f9.png"},
    {name: 'active campaign', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7ccbfc12ceb1fe6ae68_active_Campaign_svg_35c109a2eb.svg"},
    {name: 'asana', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cdeb6560b7c1ec0f6a_asana_svg_55712e4bc0.svg"},
    {name: 'affinity', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cc7710ca11e9ff79c3_affinity_svg_bfb77106bf.svg"},
    {name: 'microsoft excel', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729b8346ed0eceba7d8_microsoft_Excel_svg_dc455568ae.svg"},
    {name: 'microsoft outlook', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729fbb7d09521916b34_microsoft_Outlook_svg_baf4ee4ddf.svg"},
    {name: 'airtable', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cdeb6560b7c1ec0fc4_airtable_svg_3260e9a572.svg"},
    {name: 'blob', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f6a68fbe0cbedc9ca2ddb3_mailchimp_svg_574c2a4641.svg"},
    {name: 'sql', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f57a05be2624ab9ba447bb_my_Sql_svg_d9740ad4f9.png"},
    {name: 'active campaign', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7ccbfc12ceb1fe6ae68_active_Campaign_svg_35c109a2eb.svg"},
    {name: 'asana', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cdeb6560b7c1ec0f6a_asana_svg_55712e4bc0.svg"},
    {name: 'affinity', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cc7710ca11e9ff79c3_affinity_svg_bfb77106bf.svg"},
    {name: 'microsoft excel', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729b8346ed0eceba7d8_microsoft_Excel_svg_dc455568ae.svg"},
    {name: 'microsoft outlook', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729fbb7d09521916b34_microsoft_Outlook_svg_baf4ee4ddf.svg"},
    {name: 'airtable', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cdeb6560b7c1ec0fc4_airtable_svg_3260e9a572.svg"},
    {name: 'airtable', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f57a056b782256dbbb14c0_Group_f538a48daf.png"},
    {name: 'postmark', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72aedd8d90bd4f8139f_postmark_Trigger_png_77bacccff7.svg"},
    {name: 'posthog', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72a5d5287c0e71f0e6d_post_Hog_svg_0e5a29cd64.svg"},
    {name: 'autopilot', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cd19ed90bc689462b3_autopilot_svg_b9a6db3526.svg"},
    {name: 'agile crm', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cd45de65d9d01bbec5_agile_Crm_png_ab0a6823a4.svg"},
    {name: 'marketstack', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f6a68f9befbce885cd4c83_marketstack_svg_a3eb7798e5.svg"},
    {name: 'automizy', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7ce9b227a3194696e89_automizy_png_6c4c2ae7c0.svg"}
];

const toolsRow2 = [
    {name: 'discord', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72aa7e91197f74da789_Vector_1_d7b4c2b619.svg"},
    {name: 'aws bedrock', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729d7214df077bd1a8e_lm_Chat_Aws_Bedrock_svg_1ae33dfeb5.svg"},
    {name: 'amqp', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cc51d72b9903df9fde_amqp_svg_ebc4c3b32a.svg"},
    {name: 'ai transform', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cdc905e0766217414a_ai_Transform_svg_295de265a2.svg"},
    {name: 'aggregate', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cc8fbc5fb41664b4ba_aggregate_svg_920d36c8b1.svg"},
    {name: 'microsoft excel', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729b8346ed0eceba7d8_microsoft_Excel_svg_dc455568ae.svg"},
    {name: 'pinecone', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f57a101c0f1368d96e0b4c_vector_Store_Pinecone_svg_53b9355d44.png"},
    {name: 'openAI', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f57a0637fe4700cbc94571_Vector_1_70ecbab421.png"},
    {name: 'd3bf3a', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d729644e57ad4c4882db_d3bf3a_svg_679a3f62f0.svg"},
    {name: 'calender', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66f4d7cc7d05b082d9860095_Img_1_0efa51a03c.svg"},
    {name: 'vector', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72a355f9c89eb0fe0a0_Vector_2_41fc98a2e5.svg"},
    {name: 'bubble', image: "https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/66e3d72d9607e61eeec9add2_bubble_svg_eb8418417c.svg"},
    {name: 'telegram', image: "https://core.telegram.org/file/811140934/1/tbDSLHSaijc/fdcc7b6d5fb3354adf"},
    {name: 'gmail', image: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"},
    {name: 'telegram app', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/500px-Telegram_2019_Logo.svg.png"},
    {name: 'slack', image: "https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd-1920-80.jpg"},
    {name: 'whatsapp', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qJVl8fH77O0CejopFn81IwiQcN_bcBqB2Y1taX87-ncvJPfWdZrc&usqp=CAE&s"},
]

export function SlidingTools() {
    return (
        <section className="py-24 bg-black overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-6 mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    The Tools We Integrate
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    We work with your existing stack. No need to rip and replace.
                </p>
            </div>

            <div className="flex flex-col gap-8 relative">
                {/* Gradient Masks for fade effect */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                {/* Row 1: Sliding Left */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-4 px-2"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...toolsRow1, ...toolsRow1].map((tool, i) => (
                            <div
                                key={i}
                                className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg flex-shrink-0"
                            >
                                <Image
                                    src={tool.image}
                                    alt={tool.name}
                                    width={50}
                                    height={50}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Row 2: Sliding Right */}
                <div className="flex overflow-hidden">
                    <motion.div
                        className="flex gap-4 px-2"
                        initial={{ x: "-50%" }}
                        animate={{ x: "0%" }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{ width: "max-content" }}
                    >
                        {[...toolsRow2, ...toolsRow2].map((tool, i) => (
                            <div
                                key={i}
                                className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center p-4 shadow-lg flex-shrink-0"
                            >
                                <Image
                                    src={tool.image}
                                    alt={tool.name}
                                    width={50}
                                    height={50}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
