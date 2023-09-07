import React from 'react';
import Meta from '@/components/metas/Meta';

function Confidencial() {
    return (
        <>
            <Meta title="Finest Lash Studio - Confidencialité" />

            <div className='flex my-10 flex-col gap-10 mx-10 text-justify sm:mx-20 md:mx-32 lg:mx-40 xl:mx-60'>
                <h2>Politique de confidentialité</h2>
                <p>
                    <strong>Politique de confidentialité de Finest Lash Studio</strong><br />
                    Chez Finest Lash Studio, nous nous engageons à protéger la confidentialité de vos informations personnelles. Nous comprenons l'importance de la confidentialité de vos informations et nous prenons des mesures raisonnables pour les protéger. Cette politique de confidentialité décrit les types d'informations que nous collectons, comment nous les utilisons et les conditions dans lesquelles nous pouvons les partager.
                </p>
                <p>
                    <strong>Informations collectées</strong><br />
                    Nous collectons les informations nécessaires pour vous fournir nos services, telles que votre nom, votre adresse e-mail, votre numéro de téléphone, votre adresse et votre historique de service. Nous pouvons également collecter des informations sur votre utilisation de nos services à des fins d'analyse et d'amélioration continue.
                </p>
                <p>
                    <strong>Utilisation des informations</strong><br />
                    Nous utilisons les informations que nous collectons pour vous fournir nos services, y compris pour prendre des rendez-vous, facturer nos services et vous tenir informé de nos offres spéciales et de nos nouveaux services. Nous pouvons également utiliser ces informations pour nous assurer que nos services répondent aux besoins de nos clients.
                </p>
                <p>
                    <strong>Partage des informations</strong><br />
                    Nous ne vendrons ni ne louerons vos informations personnelles à des tiers sans votre consentement explicite. Nous ne partagerons vos informations qu'avec des tiers qui nous aident à fournir nos services, tels que des prestataires de paiement, et seulement dans la mesure où cela est nécessaire pour fournir ces services.
                </p>
                <p>
                    <strong>Protection des informations</strong><br />
                    Nous prenons des mesures raisonnables pour protéger vos informations personnelles contre la perte, l'utilisation abusive, la modification ou la divulgation non autorisée. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est sûre à 100%, il est donc possible que vos informations personnelles soient accessibles sans autorisation malgré nos efforts.
                </p>
                <p>
                    <strong>Modifications de cette politique de confidentialité</strong><br />
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment en publiant une nouvelle version sur notre site Web. Si des modifications importantes sont apportées à cette politique, nous vous en informerons par e-mail ou par une notification sur notre site Web.
                </p>
            </div>
        </>
    );
}

export default Confidencial;