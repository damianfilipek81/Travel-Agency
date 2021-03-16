import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllRegions} from '../../../redux/regionsRedux';
import {getAllFilters, changeSearchPhrase, addTags, removeTags, changeDuration, addRegions, removeRegions} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
  regions: getAllRegions(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  
  addTags: payload => dispatch(addTags(payload)),
  removeTags: tags => dispatch(removeTags(tags)),

  addRegions: payload => dispatch(addRegions(payload)),
  removeRegions: regions => dispatch(removeRegions(regions)),

  changeDuration: (type, value) => dispatch(changeDuration({
    type,
    value,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
