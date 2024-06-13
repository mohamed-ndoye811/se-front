import "./home.scss";
import Image from "next/image";

import heroImg from "@/images/home/hero.jpg";
import Link from "next/link";

export default function Home() {
	return (
		<main>
			<section id='hero'>
				<Image src={heroImg} alt='hero image' className="image" />
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
            <Link href={"/a-propos"} className="cta">En savoir plus</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
