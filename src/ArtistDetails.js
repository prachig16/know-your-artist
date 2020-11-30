import { Component, Fragment } from 'react';
import './ArtistDetails.css';


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
                            <li>Name: {this.props.artistName}</li>
                            <li>Label: {this.props.artistLabel}</li>
                            <li>Formed Year: {this.props.artistForm}</li>
                            <li>Style: {this.props.artistStyle}</li>
                            <li>Genre: {this.props.artistGenre}</li>
                        </ul>
                    </section>
                </div>
                
                <article>Biography: {this.props.artistBio}</article>
            </Fragment>
        )
    }
}
export default ArtistDetails;