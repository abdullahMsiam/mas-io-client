import { toast } from "react-toastify";


export const getStoredAppId = () => {
  const storedId = localStorage.getItem('active_app_id');
if(storedId ){
    const sotedId = JSON.parse(storedId);
    return sotedId;
}

return []; 
};

export const saveSelectedAppId = (id) => { 
  localStorage.setItem('active_app_id', JSON.stringify(id));
};

export const addToStoredAppId = (id) => {
  const currentIds = getStoredAppId();

  if (currentIds.includes(id)) {
    return; 
  }

  const updatedIds = [...currentIds, id];
  saveSelectedAppId(updatedIds);
  toast.success('App added to installation list!');
}; 

export const removeFromStoredAppId = (id) => {
  const currentIds = getStoredAppId();
    const updatedIds = currentIds.filter(appId => appId !== id);
    saveSelectedAppId(updatedIds);
    toast.error('App removed from installation list!');
}; 

export const restoreFullAppData = (allAppsArray) => {
  const id = getStoredAppId();
  
  if (!id) return null;

  // Find the full object in your local array using the restored ID
  return allAppsArray.find(app => app.id === id);
};