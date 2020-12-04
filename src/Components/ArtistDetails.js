import { Component, Fragment } from 'react';
import '../Styles/ArtistDetails.css';


class ArtistDetails extends Component {
    render() {
        return (
            <Fragment>
            {/* Artist information will be displayed in this section and will be styled as per className:"displayArtistInfo" using props: this.props.*/}

                <div className="displayInfo">
                    <figure>
                        <img src={this.props.artistImg} alt="default for the artist" />
                    </figure>
                    <section className="socialInfo">
                        <ul className="generalInfo">
                            <li>
                                <i className="fas fa-headphones-alt"></i>
                                <h4>Name:</h4> {this.props.artistName}
                            </li>

    
                            <li>
                                <i className="fas fa-headphones-alt"></i>  
                                <h4>Label: </h4>
                                { 
                                    this.props.artistLabel ?
                                    this.props.artistLabel 
                                    : 'Not Available'
                                }
                            </li>

                            <li>
                                <i className="fas fa-headphones-alt"></i>
                                <h4>Formed Year: </h4>
                                {
                                    this.props.artistForm ?
                                    this.props.artistForm
                                    : 'Not Available'
                                }
                            </li>

                            <li>
                                <i className="fas fa-headphones-alt"></i>
                                <h4>Style: </h4>
                                {
                                    this.props.artistStyle ?
                                    this.props.artistStyle
                                    : 'Not Available'
                                }
                            </li>
                            
                            <li>
                                <i className="fas fa-headphones-alt"></i>
                                <h4>Genre: </h4>
                                {
                                    this.props.artistGenre ?
                                    this.props.artistGenre
                                    : 'Not Available'
                                }
                            </li>

                            <li>
                                <i className="fas fa-headphones-alt"></i>
                                <h4>Last FM Link: </h4>
                                {
                                    this.props.artistLastFM ?
                                    this.props.artistLastFM 
                                    : 'Not Available'
                                }
                            </li>
                        </ul>
                        <nav className="socialMedia">
                            <ul>
                                {
                                    this.props.artistFB === "" ?
                                        <li>
                                            <a href="https://www.facebook.com/">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        : <li>
                                            <a href={this.props.artistFB}>
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                }
                                
                                {
                                    this.props.artistTwitter === "" ?
                                        <li>
                                            <a href="https://www.twitter.com/">
                                                <i className="fab fa-twitter-square"></i>
                                            </a>
                                        </li>
                                        : <li>
                                            <a href={this.props.artistTwitter}>
                                                <i className="fab fa-twitter-square"></i> 
                                            </a>
                                        </li>
                                }

                                {
                                    this.props.artistWebsite === "" ?
                                        <li>
                                            <a href="https://www.google.com/">
                                                <i className="fas fa-laptop"></i>
                                            </a>
                                        </li>
                                        : <li>
                                            <a href={this.props.artistWebsite}>
                                                <i className="fas fa-laptop"></i>
                                            </a>
                                        </li>
                                }
                                
                            </ul>
                        </nav>
                    </section>
                </div>
                
                <article>
                    <h3>Biography: </h3>
                    <p>{this.props.artistBio}</p>
                </article>
            </Fragment>
        )
    }
}
export default ArtistDetails;