import React from 'react';
import Card from './Card';

const Display = ({ dataf,setDataf }) => {
    
    const onDelete=(id)=>{

        const newArr=dataf.filter(item=>{
            return item.id!=id;
        })
        setDataf(newArr);
    }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {dataf.length ? (
        dataf.map(item => {
          return (
            <Card onDelete={onDelete} key={item.id}  item={item} />
          );
        })
      ) : (
        <p className="text-lg text-center">No users found</p>
      )}
    </div>
  );
}

export default Display;
