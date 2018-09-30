import React from 'react';
import './no-data-container.css';

class NoDataContainer extends React.Component {
    render() {
        return (
            <div className="no-data-container" >
                <div className="no-data-text">
                    {(this.props.isSearched) ? <text>No data available for your search. <br />
                        Please try different search criteria.</text>
                        :
                        <text>“Travel is fatal to prejudice, bigotry, and narrow-mindedness, <br />
                            and many of our people need it sorely on these accounts. <br />
                            Broad, wholesome, charitable views of men and things cannot be acquired<br />
                            by vegetating in one little corner of the earth all one's lifetime.”<br />
                            <b>― Mark Twain, The Innocents Abroad / Roughing It </b></text>
                    }
                </div>
            </div>
        )
    }
}

export default NoDataContainer;
