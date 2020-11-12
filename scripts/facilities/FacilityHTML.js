
// build HTML for indv. witnes/statement
export const FacilityHTML = (facilityObj) => {
    return `
        <div class="facility">
          <h5>Facility Name: ${facilityObj.facilityName}</h5>
          <p>Security Level: ${facilityObj.securityLevel}</p>
          <p>Capacity: ${facilityObj.capacity}</p>
        </div>
     `
  }

 