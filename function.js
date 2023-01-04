
function bulbalik(pParlist,pFishmiktar) {
    let overstocFish=pParlist.filter((fish)=>fish.stockVolumeInKg > pFishmiktar)
    return overstocFish
}