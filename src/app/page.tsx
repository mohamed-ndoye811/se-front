import "./home.scss";
import Image from "next/image";
import Link from "next/link";

import avatarExampleImg from "@/images/home/avatar.png";
import brandExempleImg from "@/images/home/brand-placeholder.svg";
import structureImg from "@/images/home/building.jpg";
import heroImg from "@/images/home/hero.jpg";
import aboutImg from "@/images/home/study-hat.png";

import { TeamMemberSlider } from "@/components/containers";
import { BrandComponent } from "@/components/pages/home";
import type { Metadata } from "next";
import { TeamMember } from "@/types/teamMember.type";
import TestimoniesList from "@/components/containers/TestimoniesList/TestimoniesList";
import MapComponent from "../components/app/MapComponent/MapComponent";
import StudyClassesList from "../components/containers/StudyClassesList/StudyClassesList";

export const metadata: Metadata = {
	title: "Sen'Excellence - Complexe Scolaire Sénégalais de la Crèche au Lycée",
	description: "Découvrez notre complexe scolaire au Sénégal, offrant une éducation de la crèche au lycée dans des infrastructures modernes. Cantine, cours de récréation adaptées, suivi personnalisé et excellence pédagogique pour garantir un parcours post-bac réussi.",
};

const teamMembers: TeamMember[] = [
	{
		avatar: avatarExampleImg,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		avatar: avatarExampleImg,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		avatar: avatarExampleImg,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		avatar: avatarExampleImg,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		avatar: avatarExampleImg,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
	{
		avatar: avatarExampleImg,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Qorem ipsum dolor sit amet, consectetur adipiscing elit.",
	},
];

export default function Home() {
	return (
		<main>
			<section id='hero'>
				<Image src={heroImg} alt='hero image' className='image' />
				<div className='text-wrapper'>
					<h1 className='title'>
						Complexe scolaire
						<span>SEN’EXCELLENCE</span>
					</h1>
					<div className='text'>
						<p>
							Découvrez l&apos;excellence éducative au cœur du Sénégal, où
							chaque élève trouve l&apos;inspiration pour atteindre son plein
							potentiel et façonner un avenir prometteur.
						</p>
						<Link href={"/a-propos"} className='cta'>
							En savoir plus
						</Link>
					</div>
				</div>
			</section>

			<section id='about'>
				<div className='wrapper'>
					<h2 className='title'>Notre projet</h2>
					<div className='text-wrapper'>
						<p>
							Imaginez un lieu où l&apos;éducation de votre enfant est prise en
							charge de la crèche jusqu&apos;au lycée, garantissant un parcours
							harmonieux et une réussite post-bac assurée. C&apos;est
							l&apos;essence même de notre complexe scolaire.
							<br />
							<br />
							Nous avons conçu un environnement d&apos;excellence où chaque
							élève est guidé et encouragé à donner le meilleur de lui-même.
							Grâce à un suivi personnalisé et des méthodes pédagogiques
							innovantes, nous préparons nos élèves à devenir des acteurs
							accomplis de leur propre avenir.
							<br />
							<br />
							Notre équipe éducative, passionnée et expérimentée, met tout en
							œuvre pour offrir une éducation de haute qualité, soutenue par des
							infrastructures modernes et des programmes enrichissants. Notre
							objectif est de cultiver les talents et les compétences
							nécessaires pour que chaque enfant puisse s&apos;épanouir
							pleinement et réussir dans ses études supérieures et au-delà.
							<br />
							<br />
							Rejoignez notre communauté scolaire et offrez à votre enfant
							l&apos;opportunité de bénéficier d&apos;un parcours éducatif
							exceptionnel. Ensemble, construisons un avenir radieux pour votre
							enfant, dès aujourd&apos;hui.
						</p>
					</div>
				</div>

				<Image src={aboutImg} alt='about image' className='image' />
			</section>

			<section id={"structure"}>
				<div className='header'>
					<Image
						src={structureImg}
						alt={"Image de l'établissement"}
						className={"image"}
					/>
				</div>
				<div className='text-wrapper'>
					<h2 className='title'>Notre structure</h2>
					<p>
						Notre complexe scolaire regroupe toutes les écoles en une seule
						structure cohérente et harmonieuse, offrant un environnement propice
						à l&apos;épanouissement de chaque élève. Nos bâtiments modernes et
						bien équipés sont conçus pour répondre aux besoins spécifiques des
						différentes tranches d&apos;âge, de la crèche au lycée.
						<br />
						<br />
						La cantine, située au cœur de notre établissement, propose une
						restauration équilibrée et savoureuse, permettant aux élèves de se
						nourrir sainement tout au long de la journée. Nos chefs cuisiniers
						s&apos;assurent de préparer des repas variés et nutritifs, adaptés
						aux besoins nutritionnels des enfants et adolescents.
						<br />
						<br />
						Pour favoriser le bien-être et la détente de nos élèves, notre
						complexe dispose de deux cours de récréation distinctes. Ces espaces
						extérieurs sont aménagés pour offrir des moments de pause et de
						ressourcement entre les cours. Les plus jeunes peuvent s&apos;amuser
						en toute sécurité dans une cour adaptée à leurs besoins, tandis que
						les plus grands disposent d&apos;un espace où ils peuvent se
						détendre et interagir avec leurs camarades.
						<br />
						<br />
						Chaque détail de notre structure est pensé pour créer un cadre de
						vie scolaire agréable et stimulant, où les élèves peuvent
						s&apos;épanouir pleinement et réussir leurs études dans les
						meilleures conditions possibles.
					</p>
				</div>
			</section>

			<section id='sponsors'>
				<div className='wrapper'>
					<h2 className='title'>Nos partenaires</h2>
					<div className='brands'>
						<BrandComponent logo={brandExempleImg} name={"Brand"} />
						<BrandComponent logo={brandExempleImg} name={"Brand"} />
						<BrandComponent logo={brandExempleImg} name={"Brand"} />
						<BrandComponent logo={brandExempleImg} name={"Brand"} />
						<BrandComponent logo={brandExempleImg} name={"Brand"} />
						<BrandComponent logo={brandExempleImg} name={"Brand"} />
					</div>
				</div>
			</section>

			<section id='team'>
				<div className='wrapper'>
					<h2 className='title'>Notre équipe</h2>
					<TeamMemberSlider teamMembers={teamMembers} />
				</div>
			</section>

			<section id='programs'>
				<StudyClassesList />
			</section>

			<section id='testimonies'>
				<div className='wrapper'>
					<h2 className='title'>Témoignages</h2>
					<div className='testimonies'>
						<TestimoniesList />
					</div>
				</div>
			</section>

			<section id='location'>
				<div className='text-content'>
					<p className='title'>où nous trouver et nous joindre</p>
					<div className='text'>
						<div className='address'>
							<p className='subtitle'>ADRESSE</p>
							<p>
								Lots 114 lotissement de la série G, <br /> Rufisque Est,{" "}
								<b>SÉNÉGAL</b>
							</p>
						</div>
						<div className='phone'>
							<p className='subtitle'>Telephone</p>
							<a href='tel:+221 33 836 12 49'>+221 33 836 12 49</a>
						</div>
						<div className='socials'></div>
					</div>
				</div>
				<MapComponent />
			</section>
		</main>
	);
}
