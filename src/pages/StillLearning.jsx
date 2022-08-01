import React, { useState, useEffect } from "react";
import axios from "axios";
import "../stylesheets/StillLearning.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslation } from "react-i18next"

function NonSkills() {
	const { t } = useTranslation(['translationGeneral'])
	const [randomTitle, setRandomTitle] = useState('Quantum_field_theory')
	const [respData, setRespData] = useState([]);

	const getRandomTitle = () => {
		axios
			.get("https://en.wikipedia.org/api/rest_v1/page/random/title")
			.then(resp => {
				setRandomTitle(resp?.data?.items[0]?.title);
			})
			.catch((error) => console.log)
	}

	const fetchMoreData = () => {
		axios
			.get(`https://en.wikipedia.org/api/rest_v1/page/related/${randomTitle}`)
			.then(resp => {
				setRespData([...respData, ...resp.data.pages]);
			})
			.catch((error) => console.log)
			getRandomTitle()
	}
	useEffect(() => {
		fetchMoreData()
	}, []);

	return (
		<>
		<h1>{t('to-learn')}</h1>
		<p>
			<em>
				{t('content-disclaimer')}
			</em>
		</p>
		<div className="wikiContent">
			<InfiniteScroll
				dataLength={respData.length}
				next={fetchMoreData}
				hasMore={true}
				loader={<h4>Loading...</h4>}
			>
				{respData.map((data, index) => (
				<div key={index} className="wikiCard">
				<h2 dangerouslySetInnerHTML={{ __html: data?.displaytitle }}></h2>
				<img src={data?.thumbnail?.source} alt="" />
				<p className="description">
					<em>Description: {data?.description}</em>
				</p>
				<div dangerouslySetInnerHTML={{ __html: data?.extract_html }}></div>
				<div className="articleLink">
					<a type="button" href={data?.content_urls?.desktop?.page}>
					<button className="btn btn-primary" type="button">
						Read full article
					</button>
					</a>
				</div>
			</div>
              ))}
			</InfiniteScroll>
		</div>
		</>
	);
}

export default NonSkills;
