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
                    <section>
                        <ul>
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
                                    : ' Information Not Available'
                                }
                            </li>

                            <li>
                                <i className="fas fa-headphones-alt"></i>
                                <h4>Formed Year: </h4>
                                {
                                    this.props.artistForm ?
                                    this.props.artistForm
                                    : ' Information Not Available'
                                }
                            </li>

                            <li>
                                <i className="fas fa-headphones-alt"></i>
                                <h4>Style: </h4>
                                {
                                    this.props.artistStyle ?
                                    this.props.artistStyle
                                    : ' Information Not Available'
                                }
                            </li>
                            
                            <li>
                                <i className="fas fa-headphones-alt"></i>
                                <h4>Genre: </h4>
                                {
                                    this.props.artistGenre ?
                                    this.props.artistGenre
                                    : ' Information Not Available'
                                }
                            </li>
                        </ul>
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