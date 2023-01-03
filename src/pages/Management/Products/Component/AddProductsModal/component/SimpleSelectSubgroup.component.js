import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


export const SimpleSelectSubgroup = (props) => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: '100%'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  const handleChange = async (event, eventInfo) => {

    const subgroup = event.target.value
    const subgroupfa = eventInfo.props.children

    props.value({ subgroup, subgroupfa })

  };
  

  return (
    <div>

      <FormControl size='small' variant="outlined" className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          onAbort={handleChange}
        >
      
          <MenuItem value={'book'}>کتاب چاپی</MenuItem>
          <MenuItem value={'magazine'}>مجلات داخلی و خارجی</MenuItem>
    
          
          <MenuItem value={'guitar'}>گیتار</MenuItem>
          <MenuItem value={'violin'}>ویولن</MenuItem>
          <MenuItem value={'instrument'}>ساز های ایرانی </MenuItem>

          <MenuItem value={'carpet'}>فرش دست باف</MenuItem>
          <MenuItem value={'panel'}>تابلو فرش</MenuItem>


          <MenuItem value={'leather'}>کیف چرمی</MenuItem>
          <MenuItem value={'Enamels'}>میناکاری</MenuItem>
          <MenuItem value={'turquoise'}>فیروزه کوبی</MenuItem>

        </Select>
      </FormControl>

    </div>
  );
}
