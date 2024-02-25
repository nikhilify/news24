import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 12,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "India pick four spinners to play England but no Shami",
            "description": "Seamer Mohammed Shami is not included in India's squad to play the first two Tests against England as he recovers from an ankle injury.",
            "url": "http://www.bbc.co.uk/sport/cricket/67962286",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/3D0D/production/_132292651_gettyimages-1258607835.jpg",
            "publishedAt": "2024-01-12T18:07:25.4633299Z",
            "content": "Shami took 24 wickets in seven matches at an average of 10.70 at the 2023 World Cup in India\r\n<table><tr><th>India v England Test series</th></tr>\r\n<tr><td>Dates: 25 January - 11 March</td></tr><tr><… [+1394 chars]"
        },

        {
            "source": {
                "id": "cbc-news",
                "name": "CBC News"
            },
            "author": "CBC News",
            "title": "Beach visit by Indian PM Modi sparks diplomatic tiff with Maldives | CBC News",
            "description": "Some in the Maldives took offence after a tweet from India's prime minister promoting the beaches of Indian territory Lakshadweep, and it snowballed into a diplomatic fight, with loud calls on social media for Indian tourists to boycott the island country tha…",
            "url": "http://www.cbc.ca/news/world/beach-visit-modi-maldives-1.7081662",
            "urlToImage": "https://i.cbc.ca/1.7081666.1705076000!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1877370785.jpg",
            "publishedAt": "2024-01-12T17:07:22.3063554Z",
            "content": "It started with a photo of Indian Prime Minister Narendra Modi lounging on a white-sand beach while gazing into the sea and quickly descended into a full-blown diplomatic spat between India and the M… [+5691 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Saleen Martin",
            "title": "A healing Psalm: After car wreck took 3 kids, surrogacy allowed her to become a mom again.",
            "description": "Brittany Ingle of Indiana lost three of her children, 9-year-old Alivia and 6-year-old twins Xzavier and Mason in 2018. This year, she welcomed Psalm.",
            "url": "https://www.usatoday.com/story/news/nation/2024/01/12/indiana-mom-brittany-ingle-baby-boy/72188286007/",
            "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/01/11/USAT/72191005007-img-20240111-095415.jpg?crop=956,538,x0,y48&width=956&height=538&format=pjpg&auto=webp",
            "publishedAt": "2024-01-12T13:01:32+00:00",
            "content": "An Indiana woman who has spent the past five years grieving the loss of her children is now celebrating after the birth of her baby boy via surrogacy, and she has given him a name that will forever c… [+7984 chars]"
        },
        {
            "source": {
                "id": "google-news-in",
                "name": "Google News (India)"
            },
            "author": "India Today",
            "title": "Atal Setu and the science behind India's longest sea bridge - India Today",
            "description": "Atal Setu and the science behind India's longest sea bridge - India Today",
            "url": "https://news.google.com/rss/articles/CBMigwFodHRwczovL3d3dy5pbmRpYXRvZGF5LmluL2NpdGllcy9tdW1iYWkvc3RvcnkvYXRhbC1zZXR1LW11bWJhaS10cmFucy1oYXJib3VyLWxpbmstbXRobC1pbmRpYXMtbG9uZ2VzdC1zZWEtYnJpZGdlLTI0ODc5NzEtMjAyNC0wMS0xMtIBhwFodHRwczovL3d3dy5pbmRpYXRvZGF5LmluL2FtcC9jaXRpZXMvbXVtYmFpL3N0b3J5L2F0YWwtc2V0dS1tdW1iYWktdHJhbnMtaGFyYm91ci1saW5rLW10aGwtaW5kaWFzLWxvbmdlc3Qtc2VhLWJyaWRnZS0yNDg3OTcxLTIwMjQtMDEtMTI?oc=5",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202401/atal-setu-123336159-16x9_0.jpg?VersionId=wWUwOdkICs3L465E4FEYg4F246Z45tGJ&size=690:388",
            "publishedAt": "2024-01-12T12:58:00+00:00",
            "content": null
        },
        {
            "source": {
                "id": "fortune",
                "name": "Fortune"
            },
            "author": "Emma Hinchliffe, Paige McGlauflin",
            "title": "Why a former SoftBank partner is tackling mid-career drop-off for working mothers",
            "description": "Former SoftBank partner and Facebook India director Kirthiga Reddy is the cofounder of Laddrr, a resource hub for working mothers aiming to prevent mid-career drop-off.",
            "url": "https://fortune.com/2022/06/01/former-softbank-partner-tackling-mid-career-drop-off-for-working-mothers/",
            "urlToImage": "https://content.fortune.com/wp-content/uploads/2022/05/Kirthiga1.jpg?resize=1200,600",
            "publishedAt": "2022-06-01T13:22:34Z",
            "content": "Skip to Content"
        },
        {
            "source": {
                "id": "the-hindu",
                "name": "The Hindu"
            },
            "author": "Ananth Krishnan",
            "title": "Dalai Lamas close aides targeted on Pegasus spyware list",
            "description": "Analysis indicates that the Indian govt. was selecting the potential targets’",
            "url": "https://www.thehindu.com/news/international/dalai-lamas-close-aides-targeted-on-pegasus-spyware-list/article35474285.ece",
            "urlToImage": "https://www.thehindu.com/news/international/dvshb0/article35474284.ece/ALTERNATES/LANDSCAPE_615/thjc-DalaiLama",
            "publishedAt": "2021-07-22T15:47:01Z",
            "content": "Several of the top India-based aides to the Tibetan spiritual leader, the Dalai Lama, figure on the list of potential targets for spying using the Pegasus spyware, according to a report on Thursday. … [+2399 chars]"
        },
        {
            "source": {
                "id": "rte",
                "name": "RTE"
            },
            "author": "RTÉ News",
            "title": "UK continues with reopening plan despite concerns",
            "description": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.",
            "url": "https://www.rte.ie/news/uk/2021/0515/1221764-uk-indian-variant/",
            "urlToImage": "https://img.rasset.ie/0016cb40-1600.jpg",
            "publishedAt": "2021-05-15T09:33:48Z",
            "content": "British ministers are pushing on with a major easing of restrictions on Monday despite concerns over the Indian variant of coronavirus, as they were criticised for allowing the strain's import.\r\nPrim… [+5066 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Rajat Pandit",
            "title": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China",
            "description": "India News:  The Army is now exploring the possibility of procuring 350 light tanks, which can also be transported by air, to augment its firepower in high-altitu",
            "url": "http://timesofindia.indiatimes.com/india/army-explores-procurement-of-350-light-tanks-for-mountainous-terrain-after-border-standoff-with-china/articleshow/82217825.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82217908,width-1070,height-580,imgsize-264639,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T08:29:00Z",
            "content": "Army explores procurement of 350 light tanks for mountainous terrain after border standoff with China\r\n<ul><li>News</li>\r\n<li>India News</li>\r\n<li>Army explores procurement of 350 light tanks for mou… [+58 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Times Of India",
            "title": "PBKS vs MI Live Score, IPL 2021: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways",
            "description": "IPL Live Score: Mumbai Indians seek consistency; Punjab Kings eye return to winning ways. Stay with TOI to get IPL live score, playing 11, scorecard, highlights and ball by ball score updates of the 17th IPL match between Punjab Kings and Mumbai Indians.",
            "url": "http://timesofindia.indiatimes.com/sports/cricket/ipl/live-blog/punjab-kings-vs-mumbai-indians-pbks-vs-mi-live-score-ipl-2021-17th-match-chennai/liveblog/82214950.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82214950,width-1070,height-580,imgsize-157009,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T05:44:49Z",
            "content": "Ravi Bishnoi return on the cards?\r\nDeepak Hooda showed what he is capable of, but greater consistency would be needed from him if the team has to prosper. They bet on Australian pace imports Jhye Ric… [+3131 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "PTI",
            "title": "Zydus Cadila gets DCGI nod for hepatitis drug for Covid-19 treatment",
            "description": "India News: Drug firm Zydus Cadila on Friday said it has received restricted emergency use approval from the Indian drug regulator for the use of Pegylated Interf",
            "url": "http://timesofindia.indiatimes.com/india/zydus-cadila-gets-dcgi-nod-for-hepatitis-drug-for-covid-19-treatment/articleshow/82214909.cms",
            "urlToImage": "https://static.toiimg.com/thumb/msid-82214921,width-1070,height-580,imgsize-98052,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
            "publishedAt": "2021-04-23T05:43:00Z",
            "content": null
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Bloomberg",
            "title": "Even record death toll may hide extent of Indias Covid crisis",
            "description": "India News: Bodies piling up at crematoriums and burial grounds across India are sparking concerns that the death toll from a ferocious new Covid-19"
        }
    ]
    constructor(props) {
        super(props);
        console.log("hello i am constructor from news");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `news24 | ${this.props.category}`

    }

    async updateNews() {
        this.props.setProgress(10);
        fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=86546d293df94de591ee496d9c074286&page=1&pageSize=${this.props.pageSize}`,
            this.setState({ loading: true })
        ).then((response) => {
            return( 
                this.props.setProgress(30),
                response.json()
                )
        }).then((data) => {
                this.setState({
                    articles: data.articles,
                    totalResults: data.totalResults,
                    loading: false,
                });
                this.props.setProgress(100);

            });


    }


    async componentDidMount() {
        console.log("mount")
        // fetch( `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=86546d293df94de591ee496d9c074286&page=1&pageSize=${this.props.pageSize}`,
        // this.setState({loading:true})

        // ).then((response) => response.json())
        // .then((data) => {
        //     this.setState({
        //         articles: data.articles,
        //         totalResults: data.totalResults,
        //         loading:false
        //     });
        // });
        this.updateNews()
    }
    handlePrevClick = async () => {

        // fetch( `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=86546d293df94de591ee496d9c074286&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`,
        // this.setState({loading:true})

        // ).then((response) => response.json())
        // .then((data) => {
        //     this.setState({
        //         page:this.state.page - 1,
        //         articles: data.articles,
        //         loading:false
        //     });
        // });
        // this.setState({ page: this.state.page - 1 });
        this.updateNews();

    }
    handleNextClick = async () => {
        // console.log("next")
        // if((this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
        // }     
        //    else{
        //         fetch( `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=86546d293df94de591ee496d9c074286&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`,
        //         this.setState({loading:true})

        //         ).then((response) => response.json())
        //         .then((data) => {
        //         this.setState({
        //             page:this.state.page + 1,
        //             articles: data.articles,
        //             loading:false

        //         });
        //     });
        // }     
        // this.setState({ page: this.state.page + 1 });
        this.updateNews();

    }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=86546d293df94de591ee496d9c074286&page=${this.state.page}&pageSize=${this.props.pageSize}`,
        this.setState({loading:true})
        ).then((response) => response.json())
            .then((data) => {
                this.setState({
                    articles: this.state.articles.concat(data.articles),
                    totalResults: data.totalResults,
                    loading:false
                });
            });
    }

    render() {
        return (
            <>  
                
                <h1 className='text-center'>news24 - Top {this.props.category} Headlines</h1>
                {/* {this.state.loading && <Spinner/>} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.loading && <Spinner/>}
                >
                
                <div className='container'>

                    <div className='row'>
                        {this.state.articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItems title={element.title ? element.title.slice(0, 65) : ""} description={element.description ? element.description.slice(0, 100) : ""} author={element.author} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div >

                    {/* <div className='container d-flex justify-content-between'>
            <button disabled={this.state.page<= 1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}> &larr; Prev</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div> */}
            </InfiniteScroll>
            </>
        )
    }
}

export default News