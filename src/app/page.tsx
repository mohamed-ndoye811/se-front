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
import { Testimony } from "@/types/testimony.type";
import TestimoniesList from "@/components/containers/TestimoniesList/TestimoniesList";
import MapComponent from "../components/app/MapComponent/MapComponent";

export const metadata: Metadata = {
	title: "Sen'excellence",
	description: "Generated by create next app",
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
];

const testimonies: Testimony[] = [
	{
		id: 1,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Parent d'élève",
		avatar: avatarExampleImg,
		rate: 4.75,
		review:
			"Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
	},
	{
		id: 2,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Parent d'élève",
		avatar: avatarExampleImg,
		rate: 4.75,
		review:
			"Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
	},
	{
		id: 3,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Parent d'élève",
		avatar: avatarExampleImg,
		rate: 4.75,
		review:
			"Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
	},
	{
		id: 4,
		firstname: "Prenom",
		lastname: "Nom",
		role: "Parent d'élève",
		avatar: avatarExampleImg,
		rate: 4.75,
		review:
			"Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
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
							Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
							vulputate libero et velit interdum, ac aliquet odio mattis.
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
							Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
							turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
							nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
							tellus elit sed risus. Maecenas eget condimentum velit, sit amet
							feugiat lectus. Class aptent taciti sociosqu ad litora torquent
							per conubia nostra, per inceptos himenaeos. Praesent auctor purus
							luctus enim egestas, ac scelerisque ante pulvinar. Donec ut
							rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
							vel bibendum lorem. Morbi convallis convallis diam sit amet
							lacinia. Aliquam in elementum tellus.
							<br />
							<br />
							Curabitur tempor quis eros tempus lacinia. Nam bibendum
							pellentesque quam a convallis. Sed ut vulputate nisi. Integer in
							felis sed leo vestibulum venenatis. Suspendisse quis arcu sem.
							Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend
							magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices
							nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla
							varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis
							eleifend. Sed nec ante dictum sem condimentum ullamcorper quis
							venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
						</p>
					</div>
				</div>

				<Image src={aboutImg} alt='about image' className='image' />
			</section>

			<section id={"structure"}>
				<div className='header'>
					<h2 className={"title"}>
						<span>Notre</span> <span>établissement</span>
					</h2>
					<Image
						src={structureImg}
						alt={"Image de l'établissement"}
						className={"image"}
					/>
				</div>
				<div className='text-wrapper'>
					<h2 className='title'>Notre structure</h2>
					<p>
						Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
						turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
						nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
						tellus elit sed risus. Maecenas eget condimentum velit, sit amet
						feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
						conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
						enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
						Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
						lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
						elementum tellus.
						<br />
						<br />
						Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
						quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
						vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex
						eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
						porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna
						non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
						lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum
						sem condimentum ullamcorper quis venenatis nisi. Proin vitae
						facilisis nisi, ac posuere leo.
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
				<div className='class'></div>
			</section>

			<section id='testimonies'>
				<div className='wrapper'>
					<h2 className='title'>Témoignages</h2>
					<div className='testimonies'>
						<TestimoniesList testimonies={testimonies} />
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
