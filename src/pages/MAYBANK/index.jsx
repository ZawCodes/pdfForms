import React, { useEffect, useState } from "react";
import "./style.scss";
import dummyData from "./dummy.json";
import logo from "./maybank.png";

export function MAYBANK() {
  const [formState, setFormState] = useState({
    dobMain: "",
    fullNameMain: "",
    nricMain: "",
    genderMain: "",
    citizenshipMain: "",
    residentialStatusMain: "",
    addressMain: "",
    mobileMain: "",
    emailMain: "",
    employerMain: "",
    occupationMain: "",
    loanAmount: "",
    loanTenure: "",
    loanTenureYears: "",
    loanTenureMonths: "",
    existingBank: "",
    buc: "",
    newPropertyType: "",
    financingType: "",
    housingTypeMain: "",
  });

  const path = window.location.pathname;
  const bank = path.split("/")[path.split("/").length - 2];
  const leadId = path.split("/")[path.split("/").length - 1];

  const getLead = (dummyData) => {
    setForm(dummyData);
  };

  useEffect(() => {
    getLead(dummyData);
  }, []);

  const setForm = (lead) => {
    const dob = lead.dob.split("T")[0].split("-").reverse().join("-");
    const tenureYears = Math.trunc(lead.tenure_required / 12);
    const tenureMonths = lead.tenure_required % 12;

    setFormState({
      dobMain: dob,
      fullNameMain: lead.name,
      nricMain: lead.nric,
      genderMain: lead.gender,
      citizenshipMain: lead.nationality,
      residentialStatusMain: lead.residential_status,
      addressMain: lead.address,
      mobileMain: lead.mobile,
      emailMain: lead.email,
      employerMain: lead.employer,
      occupationMain: lead.occupation,
      loanAmount: lead.loan_amount,
      loanTenure: lead.tenure_required,
      loanTenureYears: tenureYears,
      loanTenureMonths: tenureMonths,
      existingBank: lead.existing_bank,
      buc: lead.buc,
      newPropertyType: lead.new_property,
      financingType: lead.financing_type,
      housingTypeMain: lead.housingType,
    });
  };

  return (
    <>
      {/* page 1 */}
      <div className="page one">
        <div className="header">
          <div className="logo">
            <img src={logo} alt="Maybank" />
          </div>
          <h1>Mortgage Loan Application Form</h1>
        </div>
        <div className="paragraph">
          <p className="mb-025">
            Please note that incomplete forms or applications not accompanied by
            documents will delay processing time. Maybank Singapore Limited
            ("Bank") reserves the right to request for more documents where
            applicable. All information requested in this form is mandatory and
            must be completed in full. In the event we receive incomplete or
            inaccurate information your application/ request may be delayed or
            rejected without further notice to you.
          </p>
          <p
            style={{
              textAlignLast: "justify",
            }}
          >
            If you wish to have a free credit report, you may obtain it within
            30 calendar days from the date of approval or rejection of this
            application via the credit bureau website listed below.
          </p>
          <p>
            Alternatively, you may bring the approval or rejection letter and
            your NRIC to the following credit bureau's registered office to
            obtain a free credit report.
          </p>
          <ul className="bullet">
            <li>Credit Bureau (Singapore) Pte Ltd</li>
          </ul>

          <p style={{ marginLeft: "1rem" }}>www.creditbureau.com.sg</p>
        </div>
        <div className="title">
          <h2>Personal Details</h2>
        </div>
        <div className="personal-details">
          <div className="left">
            <h4 className="mb-05">Main Applicant</h4>
            <div className="fullname">
              <label>Full Name as in NRIC/Passport</label>
              <div className="cb-group">
                <div>
                  <input
                    type="checkbox"
                    checked={formState.genderMain?.toLowerCase() === "male"}
                  />
                  <label>Mr</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    checked={formState.genderMain?.toLowerCase() === "female"}
                  />
                  <label>Ms</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Mdm</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Mrs</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Dr</label>
                </div>
              </div>
            </div>
            <div className="mb-025">
              <input type="text" value={formState.fullNameMain} />
              <p>(Please underline surname)</p>
            </div>
            <div className="nric mb-025">
              <h4>NRIC/Passport No.</h4>
              <input type="text" value={formState.nricMain} />
            </div>
            <div className="nationality mb-025">
              <h4>Nationality</h4>
              <input type="text" value={formState.citizenshipMain} />
            </div>
            <div className="marital mb-025">
              <h4>Marital Status</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Single</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Married</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Divorced</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Others</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="dependants  mb-025">
              <h4>No. of Dependents</h4>
              <input type="text" />
            </div>
            <div className="education mb-025">
              <h4>Highest Education</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Primary</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Secondary</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Diploma/Pre-University</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Degree</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Post-Graduate</label>
                </div>
              </div>
            </div>
            <div className="residential">
              <div className="top mb-025">
                <h4>Current Residential Address</h4>
                <div>
                  (<label>same as NRIC</label>
                  <input type="checkbox" />
                  Yes
                  <input type="checkbox" />
                  No)
                </div>
              </div>
              <div className=" mb-025">
                <input type="text" value={formState.addressMain} />
              </div>
              <div className="bottom mb-025">
                <input type="text" />
                <h4>Postal Code</h4>
                <input type="text" />
              </div>
            </div>
            <div className="mailing mb-025">
              <div className="top">
                <h4>Mailing Address (if different from Residential Address)</h4>
              </div>
              <div className="mb-025">
                <input type="text" />
              </div>
              <div className="bottom mb-025">
                <input type="text" />
                <h4>Postal Code</h4>
                <input type="text" />
              </div>
              <p>
                (All correspondence will be sent to the Main Applicant only)
              </p>
            </div>
            <div className="contact mb-025">
              <h4>Contact No.</h4>
              <div className="inputs">
                <div>
                  <input type="text" value={formState.mobileMain} />
                  <label>(H)</label>
                </div>
                <div>
                  <input type="text" />
                  <label>(O)</label>
                </div>
                <div>
                  <input type="text" />
                  <label>(HP)</label>
                </div>
              </div>
            </div>
            <div className="email mb-025">
              <h4>Email</h4>
              <input type="text" value={formState.emailMain} />
            </div>
            <div className="ownership mb-025">
              <h4>Residential Ownership</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Fully owned</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Mortgaged</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Rented</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Paris'</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Employer's</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Others</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="type mb-025">
              <h4>Residential Type</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>HDB</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>HUDC (Non-Privatised/Privatised)</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Executive Condominium</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Private Condominium/Apartment</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Landed</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Others</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="length mb-025">
              <h4>Length of Stay In Residence</h4>
              <input type="text" />
              <label>years</label>
              <input type="text" />
              <label>months</label>
            </div>
          </div>
          <div className="right">
            <div className="joint">
              <div>
                <input type="checkbox" />
                <h4>Joint Applicant</h4>
              </div>
              <div>
                <h4>Total no. Joint Applicant(s)</h4>
                <input type="text" />
              </div>
            </div>
            <div className="fullname">
              <label>Full Name as in NRIC/Passport</label>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Mr</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Ms</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Mdm</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Mrs</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Dr</label>
                </div>
              </div>
            </div>
            <div className="mb-025">
              <input type="text" />
              <p>(Please underline surname)</p>
            </div>
            <div className="nric mb-025">
              <h4>NRIC/Passport No.</h4>
              <input type="text" />
            </div>
            <div className="nationality mb-025">
              <h4>Nationality</h4>
              <input type="text" />
            </div>
            <div className="marital mb-025">
              <h4>Marital Status</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Single</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Married</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Divorced</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Others</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="dependants  mb-025">
              <h4>No. of Dependents</h4>
              <input type="text" />
            </div>
            <div className="education mb-025">
              <h4>Highest Education</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Primary</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Secondary</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Diploma/Pre-University</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Degree</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Post-Graduate</label>
                </div>
              </div>
            </div>
            <div className="residential">
              <div className="top mb-025">
                <h4>Current Residential Address</h4>
                <div>
                  (<label>same as NRIC</label>
                  <input type="checkbox" />
                  Yes
                  <input type="checkbox" />
                  No)
                </div>
              </div>
              <div className=" mb-025">
                <input type="text" />
              </div>
              <div className="bottom mb-025">
                <input type="text" />
                <h4>Postal Code</h4>
                <input type="text" />
              </div>
            </div>
            <div className="mailing mb-025">
              <div className="top">
                <h4>Mailing Address (if different from Residential Address)</h4>
              </div>
              <div className="mb-025">
                <input type="text" />
              </div>
              <div className="bottom mb-025">
                <input type="text" />
                <h4>Postal Code</h4>
                <input type="text" />
              </div>
              <p>
                (All correspondence will be sent to the Main Applicant only)
              </p>
            </div>
            <div className="contact mb-025">
              <h4>Contact No.</h4>
              <div className="inputs">
                <div>
                  <input type="text" />
                  <label>(H)</label>
                </div>
                <div>
                  <input type="text" />
                  <label>(O)</label>
                </div>
                <div>
                  <input type="text" />
                  <label>(HP)</label>
                </div>
              </div>
            </div>
            <div className="email mb-025">
              <h4>Email</h4>
              <input type="text" />
            </div>
            <div className="ownership mb-025">
              <h4>Residential Ownership</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Fully owned</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Mortgaged</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Rented</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Paris'</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Employer's</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Others</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="type mb-025">
              <h4>Residential Type</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>HDB</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>HUDC (Non-Privatised/Privatised)</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Executive Condominium</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Private Condominium/Apartment</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Landed</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Others</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="length mb-025">
              <h4>Length of Stay In Residence</h4>
              <input type="text" />
              <label>years</label>
              <input type="text" />
              <label>months</label>
            </div>
          </div>
        </div>
        <div className="title">
          <h2>Employment Details</h2>
        </div>
        <div className="employment-details">
          <div className="left">
            <div className="status mb-025">
              <h4>Employment Status</h4>
              <div>
                <div>
                  <input type="checkbox" />
                  <label>Employed</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Self-Employed</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Unemployed</label>
                </div>
              </div>
            </div>
            <div className="company mb-025">
              <h4>Company name</h4>
              <input type="text" value={formState.employerMain} />
            </div>
            <div className="designation mb-025">
              <h4>Designation</h4>
              <input type="text" value={formState.occupationMain} />
            </div>
            <div className="industry mb-025">
              <h4>Industry Type</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Banking/Finance</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Building/Construction</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Government</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>IT/Communications</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Manufacturing</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Retail/F&B</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Travel/Hospitality</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Others</label>
                  <input type="text" />
                </div>
                <div></div>
              </div>
            </div>
            <div className="current mb-025">
              <h4>Current Position</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Senior Management</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Professional</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Middle Management</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Executive</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Skilled Trades/Clerical</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Others</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="length mb-025">
              <h4>Length of Current Employment/Business</h4>
              <input type="text" />
              <label>years</label>
              <input type="text" />
              <label>months</label>
            </div>
            <div className="structure mb-025">
              <h4>Income Structure</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Fully Salaried</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Salary with Commission of 20% and below</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Fully Commissioned</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Salary with Commission above 20%</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Freelance/Part-Time</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>On Contract</label>
                </div>
              </div>
            </div>
            <div className="income mb-025">
              <h4>Income</h4>
              <div className="inputs">
                <div>
                  <label>Annual Income</label>
                  <div>
                    <label>S$</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <label>Monthly Fixed Income</label>
                  <div>
                    <label>S$</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <label>Commission/Freelance Income</label>
                  <div>
                    <label>S$</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <label>Other Income</label>
                  <div>
                    <label>S$</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="source mb-025">
              <h4>Source of Other Income</h4>
              <div>
                <input type="checkbox" />
                <label>Rental</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Interest/Dividends</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Others</label>
              </div>
            </div>
            <div className="previous mb-025">
              <h4>Name of Previous Company</h4>
              <div>
                <input type="text" />
                <p>(if current employment is less than 1 year)</p>
              </div>
            </div>
            <div className="previous-length mb-025">
              <h4>Length of Previous Employment/Business</h4>
              <input type="text" />
              <label>years</label>
              <input type="text" />
              <label>months</label>
            </div>
          </div>
          <div className="right">
            <div className="status mb-025">
              <h4>Employment Status</h4>
              <div>
                <div>
                  <input type="checkbox" />
                  <label>Employed</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Self-Employed</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Unemployed</label>
                </div>
              </div>
            </div>
            <div className="company mb-025">
              <h4>Company name</h4>
              <input type="text" />
            </div>
            <div className="designation mb-025">
              <h4>Designation</h4>
              <input type="text" />
            </div>
            <div className="industry mb-025">
              <h4>Industry Type</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Banking/Finance</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Building/Construction</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Government</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>IT/Communications</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Manufacturing</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Retail/F&B</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Travel/Hospitality</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Others</label>
                  <input type="text" />
                </div>
                <div></div>
              </div>
            </div>
            <div className="current mb-025">
              <h4>Current Position</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Senior Management</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Professional</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Middle Management</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Executive</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Skilled Trades/Clerical</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Others</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="length mb-025">
              <h4>Length of Current Employment/Business</h4>
              <input type="text" />
              <label>years</label>
              <input type="text" />
              <label>months</label>
            </div>
            <div className="structure mb-025">
              <h4>Income Structure</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Fully Salaried</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Salary with Commission of 20% and below</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Fully Commissioned</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Salary with Commission above 20%</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Freelance/Part-Time</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>On Contract</label>
                </div>
              </div>
            </div>
            <div className="income mb-025">
              <h4>Income</h4>
              <div className="inputs">
                <div>
                  <label>Annual Income</label>
                  <div>
                    <label>S$</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <label>Monthly Fixed Income</label>
                  <div>
                    <label>S$</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <label>Commission/Freelance Income</label>
                  <div>
                    <label>S$</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <label>Other Income</label>
                  <div>
                    <label>S$</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="source mb-025">
              <h4>Source of Other Income</h4>
              <div>
                <input type="checkbox" />
                <label>Rental</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Interest/Dividends</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Others</label>
              </div>
            </div>
            <div className="previous mb-025">
              <h4>Name of Previous Company</h4>
              <div>
                <input type="text" />
                <p>(if current employment is less than 1 year)</p>
              </div>
            </div>
            <div className="previous-length mb-025">
              <h4>Length of Previous Employment/Business</h4>
              <input type="text" />
              <label>years</label>
              <input type="text" />
              <label>months</label>
            </div>
          </div>
        </div>
        <div className="footer">
          <h4>MSL-179-0324 (1/4)</h4>
          <h4>Maybank Singapore Limited (UEN: 201804195C)</h4>
        </div>
      </div>
      {/* page 2 */}
      <div className="page two">
        <div className="title">
          <h2>Details of Property to be Mortgaged</h2>
        </div>
        <div className="details-property mb-025">
          <div className="left">
            <h4 className="mb-05">Address of Mortgaged Property</h4>
            <div className="block mb-025">
              <div>
                <label>Blk/House No.</label>
                <input type="text" />
                <label>Unit No.</label>
                <input type="text" />
              </div>
              <div>
                <label>Condo/Estate/Building Name</label>
                <input type="text" />
              </div>
              <div>
                <label>Street name</label>
                <input type="text" />
                <label>Postal Code</label>
                <input type="text" />
              </div>
              <p style={{ letterSpacing: "-0.5px" }}>
                (Please note that the Bank will not send any correspondence to
                this address unless otherwise specified)
              </p>
            </div>
            <div className="registered">
              <h4 style={{ letterSpacing: "-0.5px", marginRight: "0.8rem" }}>
                Name(s) of Property's Registered Owner(s)
              </h4>
              <h4 style={{ marginRight: "2rem" }}>NRIC/PassportNo.</h4>
              <h4>Nationality</h4>
            </div>
            <div className="registered-inputs mb-025">
              <div>
                <span> 1.</span>

                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
              <div>
                <span> 2.</span>
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
              <div>
                <span> 3.</span>
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
              <div>
                <span> 4.</span>
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            </div>
            <div className="landarea mb-025">
              <h4>Land Area (If any)</h4>
              <input type="text" />
              <label>sq ft/sq m</label>
              <label>Built-in Area</label>
              <input type="text" />
              <label>sq ft/sq m</label>
            </div>
            <div className="tenure mb-025">
              <h4>Tenure</h4>
              <div>
                <div>
                  <input type="checkbox" />
                  <label>Freehold</label>
                </div>
                <div className="cb-group">
                  <input type="checkbox" />
                  <label>Leasehold</label>
                  <input type="text" />
                  <label>years w.e.f.</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="purpose mb-025">
              <h4>Purpose</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Owner Occupation</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Investment</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Rented (Monthly rental: S$</label>
                  <input type="text" />
                  <label>; expires on</label>
                  <input type="text" />
                  <label>)</label>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h4 className="mb-05">Property Type</h4>
            <div className="hdb mb-025">
              <h4>HDB</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>3-Room</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>4-Room</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>5-Room</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Executive Apartment/Mansionette</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Others</label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="private mb-025">
              <h4>Private Residential</h4>
              <div className="cb-group">
                <div>
                  <div>
                    <input type="checkbox" />
                    <label>Bungalow</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Semi-D</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Intermediate/Corner Terrace</label>
                  </div>
                </div>
                <div>
                  <div style={{ marginRight: "45px" }}>
                    <input type="checkbox" />
                    <label>Executive Condominium</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Apartment</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="checkbox" />
                    <label>Condominium</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>SOHO</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Others</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <label>
                    For Landed Property, please Indicate no. of storeys
                  </label>
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className="commercial mb-025">
              <h4>Commercial</h4>
              <div className="cb-group">
                <div>
                  <div>
                    <input type="checkbox" />
                    <label>HDB Shophouse</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>HDB Shop Unit</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Office Unit</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="checkbox" />
                    <label>Pre-War Shophouse</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Post-War Shophouse</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="checkbox" />
                    <label>Retail Shop Unit</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Others</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="industrial mb-025">
              <h4>Industrial</h4>
              <div className="cb-group">
                <div>
                  <div>
                    <input type="checkbox" />
                    <label>Flatted</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>High-Tech Building</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Landed</label>
                  </div>
                </div>
                <div>
                  <div>
                    <input type="checkbox" />
                    <label>Warehouse</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Others</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <label>Industrial Land Type</label>
                  <div>
                    <div>
                      <input type="checkbox" />
                      <label>HDB</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>JTC</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>Private</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="status mb-025">
              <h4>Property Status</h4>
              <div className="cb-group">
                <div>
                  <input type="checkbox" />
                  <label>Completed in</label>
                  <input type="text" />
                </div>
                <div>
                  <input type="checkbox" />
                  <label>Under Construction (TOP expected in</label>
                  <input type="text" />
                  <label>)</label>
                </div>
                <div className="property mb-025">
                  <h4>Private Property</h4>
                  <div className="col">
                    <div>
                      <input type="checkbox" />
                      <label>Deferred Payment</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>Progressive Payment</label>
                    </div>
                  </div>
                </div>
                <div className="property mb-025">
                  <h4>HDB</h4>
                  <div className="col">
                    <div>
                      <input type="checkbox" />
                      <label>Built-To Order (BTO) Flat</label>
                    </div>
                    <div>
                      <input type="checkbox" />
                      <label>Design, Build & Sell Scheme (DBSS) Flat</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="title">
          <h2>Financing Requirements</h2>
        </div>
        <div className="new-facilities">
          <h3 className="mb-05">New Facilities</h3>
          <div className="purchase-financing">
            <div className="left">
              <h4 className="mb-025">Purchase Financing</h4>
              <div className="otp mb-025">
                <h4>OTP granted</h4>
                <div>
                  <div>
                    <input type="checkbox" />
                    <label>No</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Yes</label>
                  </div>
                  <div>
                    <label>Date of OTP:</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="purchase mb-025">
                <h4>Purchase with Tenancy</h4>
                <div>
                  <div>
                    <input type="checkbox" />
                    <label>No</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Yes</label>
                  </div>
                  <div>
                    <label>Rental Income S$</label>
                    <input type="text" />
                    <label>; Expiry</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="benefits mb-025">
                <h4>Benefits from Developer/Vendor</h4>
                <div>
                  <div>
                    <input type="checkbox" />
                    <label>No</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Yes</label>
                  </div>
                </div>
              </div>
              <div className="received mb-025">
                <label>
                  I/we have received benefits from the Developer/Vendor (e.g.
                  discount(s), rebate(s), interest payment arrangements,
                  vocher(s), subsidy(ies) and/or any form of incentive(s)) and
                  amount
                </label>
                <div>
                  <label> received is S$ </label>
                  <input type="text" />
                </div>
              </div>
              <div className="purchase-price mb-025">
                <h4>Purchase Price</h4>
                <div>
                  <label>S$</label>
                  <input type="text" />
                </div>
              </div>
              <div className="purchase-from">
                <h4>Purchase from</h4>
                <div>
                  <input type="checkbox" />
                  <label style={{ marginRight: "1rem" }}>Developer/HDB</label>
                  <input type="checkbox" />
                  <label>Secondary Market</label>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="cash-valuation mb-025">
                <h4>Cash Over Valuation</h4>
                <div>
                  <label>S$</label>
                  <input type="text" />
                </div>
              </div>
              <div className="cash-downpayment  mb-025">
                <h4>Cash Downpayment</h4>
                <div>
                  <label>S$</label>
                  <input type="text" />
                </div>
              </div>
              <div className="cpf-downpayment  mb-025">
                <h4>CPF Downpayment</h4>
                <div>
                  <label>S$</label>
                  <input type="text" />
                </div>
              </div>
              <div className="cpf-grant  mb-025">
                <h4>CPF Grant (For HDB/EC only, if any)</h4>
                <div>
                  <label>S$</label>
                  <input type="text" />
                </div>
              </div>
              <div className="financing  mb-025">
                <h4>Financing Required</h4>
                <div style={{ marginLeft: "10px" }}>
                  <label>Mortgage Loan</label>
                  <label>S$</label>
                  <input type="text" />
                  <label>For</label>
                  <input type="text" />
                  <label>years</label>
                </div>
              </div>
            </div>
          </div>
          <div className="equity-withdrawal">
            <h4 className="mb-05">Equity Withdrawal</h4>
            <div className="fresh mb-025">
              <label>Fresh Equity Term Loan S$</label>
              <input type="text" />
              <label>For</label>
              <input type="text" />
              <label>years</label>
              <div style={{ marginLeft: "2rem" }}>
                <label style={{ marginRight: "0.25rem" }}>Loan purpose:</label>
                <div>
                  <input type="checkbox" />
                  <label>For property related investments*</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label>For all other personal use</label>
                </div>
              </div>
            </div>
            <div className="total mb-025">
              <label>
                Total CPF Withdrawal to-date (for all registered owners) S$
              </label>
              <input type="text" />
            </div>
            <div className="paragraph">
              <p>*Property-related investments refer to:</p>
              <p>
                a) Construction of building for sale or the acquisition or
                holding of immovable property; in Singapore, for rental or
                profit and its related financing activities. Except where used
                for personal occupation, (in the case of acquisition or holding
                of immovable property) as a hotel, hostel, serviced apartment,
                boarding/lodging house or dormitory or for community, charity,
                or educational purposes;
              </p>
              <p>b) making loans to property corporations;</p>
              <p>
                c) Owning shares or debentures issued by property corporations;
              </p>
              <p>
                d) Owning debentures with payment based on the turnover,
                profits, or cashflow from the mentioned activities above.
              </p>
            </div>
          </div>
          <div className="refinancing">
            <h4 className="mb-05">Refinancing</h4>
            <div className="existing">
              <h4>Existing Facilities</h4>
              <div>
                <label>Current bank/Financier</label>
                <input type="text" />
              </div>
            </div>
            <div className="outstanding">
              <h4>Outstanding Mortgage Loan</h4>
              <div>
                <label>S$</label>
                <input type="text" />
                <label>with remaining</label>
                <input style={{ width: "100px" }} type="text" />
                <label>years</label>
              </div>
            </div>
            <div className="undisbursed">
              <h4>Undisbursed Loan Amount (If any)</h4>
              <div>
                <label>S$</label>
                <input type="text" />
                <label>with remaining</label>
                <input style={{ width: "100px" }} type="text" />
                <label>years</label>
              </div>
            </div>
            <div className="equity">
              <h4>Equity Term Loan (Personal Use)</h4>
              <div>
                <label>S$</label>
                <input type="text" />
                <label>with remaining</label>
                <input style={{ width: "100px" }} type="text" />
                <label>years</label>
              </div>
            </div>
            <div className="total-cpf">
              <h4>Total CPF Withdrawal to-date (for all registered owners)</h4>
              <div>
                <label>S$</label>
                <input type="text" />
              </div>
            </div>
            <div className="financing-required">
              <h4 style={{ minWidth: "198px" }}>Financing Required</h4>
              <div>
                <label>Mortgage Loan S$</label>
                <input type="text" />
                <label>For</label>
                <input style={{ width: "100px" }} type="text" />
                <label>years</label>
              </div>
            </div>
          </div>
          <div className="bridging mb-05">
            <div className="left">
              <h4 className="mb-025">Bridging Loan</h4>
              <div className="loan">
                <div>
                  <input type="checkbox" />
                  <label>Bridging Loan</label>
                </div>
                <div style={{ marginLeft: "0.5rem" }}>
                  <label>S$</label>
                  <div>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="address mb-025">
                <div>
                  <label>Address of Property Sold/To Be Sold</label>
                  <input type="text" />
                </div>
                <div>
                  <input type="text" />
                  <label>Postal Code</label>
                  <input type="text" />
                </div>
              </div>
              <div className="prices mb-025">
                <div>
                  <h4>Sale Price:</h4>
                  <div>
                    <label>S$</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <h4>Less: Loan outstanding</h4>
                  <div>
                    <label>S$</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <h4>Less: CPF Utilised - Main</h4>
                  <div>
                    <label>S$</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <h4>Less: CPF Utilised - Joint</h4>
                  <div>
                    <label>S$</label>
                    <input type="text" />
                  </div>
                </div>
                <div>
                  <h4>Net Cash Proceeds</h4>
                  <div>
                    <label>S$</label>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <h4 className="mb-05">Construction Loan</h4>
              <div className="cost mb-025">
                <h4>Construction Cost</h4>
                <div>
                  <label>S$</label>
                  <div>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="period mb-025">
                <h4>Construction Period</h4>
                <div>
                  <label>From</label>
                  <input type="text" />
                  <label>To</label>
                  <input type="text" />
                </div>
              </div>
              <div className="loan mb-025">
                <h4>Construction Loan</h4>
                <div>
                  <label>S$</label>
                  <input type="text" />
                  <label>For</label>
                  <input type="text" />
                  <label>years</label>
                </div>
              </div>
              <div className="purpose mb-025">
                <h4>Loan Purpose</h4>
                <div>
                  <div>
                    <input type="checkbox" />
                    <label>Reconstruction</label>
                  </div>
                  <div>
                    <input type="checkbox" />
                    <label>Alterations and Additions</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="title">
          <h2>Mortgage Protection Insurance</h2>
        </div>
        <div className="mortgage-protection">
          <div className="paragraph">
            <p>
              A mortgage protection Insurance plan will protect you against
              critical illness or death. So when the unexpected happens, your
              outstanding home loan will be fully paid off, relieving your loved
              ones of the financial burden of the mortgage repayments.
            </p>
          </div>
          <div className="options">
            <div>
              <input type="checkbox" />
              <label>
                YES! I would like to find out more about the mortgage protection
                insurance. Please give me a call.
              </label>
            </div>
            <div>
              <input type="checkbox" />
              <label>
                NO. I have already arranged for my own mortgage protection
                insurance that is adequate to cover my full outstanding home
                loan, in the event of my death/terminal illness.
              </label>
            </div>
          </div>
        </div>
        <div className="footer">
          <h4>MSL-179-0324 (2/4)</h4>
          <h4>Maybank Singapore Limited (UEN: 201804195C)</h4>
        </div>
      </div>
      {/* page 3 */}
      <div className="page three">
        <div className="title">
          <h2>Home Renovation Loan</h2>
        </div>
        <div className="home-renovation mb-05">
          <input type="checkbox" />
          <label>
            Yes, I am interested to find out more about the Home Renovation Loan
            package exclusive only to Maybank Home Loan customers and hereby
            request that Maybank call me on the phone number(s) stated in this
            form for this purpose only.
          </label>
        </div>
        <div className="title">
          <h2>Application for Credit Card</h2>
        </div>
        <div className="credit mb-05">
          <div>
            <input type="checkbox" />
            <label>
              Yes, I agree to apply for a Maybank Family & Friends Card and/or
              Maybank Horizon Visa Signature Card. My Preferred Limit for the
              Credit Card is S$:____________________/
            </label>
          </div>
          <div>
            <input type="checkbox" />
            <label>
              I have no preference for the credit limit for the Credit Card
              applied for in this application (recommended minium credit limit
              is S$2,500 and should be in multiples of S$100). I agree that the
              preferred credit limit is subject to Bank's approval and will be
              applied to all my Maybank Credit Cards, if any. In the event if
              there is no preferred credit limit stated or selection made, I
              agree that the credit limit will be assigned at the Bank's
              discretion. I have read and understood the "Declaration for Credit
              Card (ref 0816)", and have completed the Credit Card Application
              Form in full, I agree and consent to Maybank Singapore Limited to
              process my Credit Card application upon approval of my Mortgage
              Loan application
            </label>
          </div>
        </div>
        <div className="title">
          <h2>Referral Details</h2>
        </div>
        <div className="referral mb-05">
          <div className="paragraph">
            <p>
              I/We confirm that I was/were referred to the Bank for this loan
              application by the person whose details I/we have provided below.
            </p>
            <p>
              By submitting such personal data to the Bank, I/we represent to
              the Bank that I/we have obtained the consent of that person for
              such disclosure in connection with the referral herein.
            </p>
            <p>
              I/we am/are aware that an incentive may be paid to the referrer
              and I/we consent to you disclosing to such person that this loan
              application has been made, whether it was successful and any other
              information relating to this application and the loan as may bye
              necessary for the purposes of or in connection with this referral
              incentive.
            </p>
          </div>
          <div className="cb mb-05">
            <div>
              <input type="checkbox" />
              <label>Property Agent</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Intermediary</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Member-Get-Member</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Others</label>
              <input type="text" />
            </div>
          </div>
          <div className="table">
            <table>
              <tr>
                <td>Name of Property Agent/ Referrer as in NRIC/Passport</td>
                <td></td>
              </tr>
              <tr>
                <td>Name of Company (where applicable)</td>
                <td></td>
              </tr>
              <tr>
                <td>CEA No. of Property Agent (where applicable)</td>
                <td></td>
              </tr>
              <tr>
                <td>Contact No. of Property Agent/Referrer</td>
                <td></td>
              </tr>
              <tr>
                <td>Referrer account number (for MGM)</td>
                <td></td>
              </tr>
              <tr style={{ height: "44px", verticalAlign: "bottom" }}>
                <td>Signature of Main Applicant</td>
                <td>Signature of Joint Applicant</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="title">
          <h2>Declaration</h2>
        </div>
        <div className="declaration">
          <div className="paragraph">
            <p>By signing this application, I/we hereby: -</p>
            <p>
              1. Confirm that the downpayment including any cash difference on
              the property to be financed is met from my/our own source of funds
              and not from credit facilities from any other financial
              institution(s) regulated by the Monetary Authority of Singapore
              and/or any moneylender(s) and/or any other source(s) and/or
              Vendor's loan.
            </p>
            <p>
              2. Confirm that in the event I/we have received such discounts,
              subsidies, benefits, rebates or any other loan from the Vendor or
              any party as stated in the application herein, that the net
              purchase price stated in the loan application excludes such
              discounts, subsidies, benefits and/or rebates.
            </p>
            <p>
              3. Confirm that at the time of this application, I am not neither
              of us is an undischarged bankrupt and no statutory demand or legal
              proceedings has been served on or commenced against me/us.
            </p>
            <p>
              4. Confirm that where the facility request is to finance the
              purchase of a shop housing unit, such property shall be used for
              business purposes.
            </p>
            <p>
              5. Declare that the property to be mortgaged has not been
              identified for the House and Development Board’s Selective En Bloc
              Redevelopment Scheme (SERS).
            </p>
            <p>
              6. Authorise you to conduct credit checks and to obtain and/or
              verify information about me/us from/with any source in accordance
              with applicable law.
            </p>
            <p>
              7. Understand that all documents submitted are not returnable and
              agree to provide any additional information and supporting
              documents from time to time as may be reasonably required by the
              Bank.
            </p>
            <p>
              8. Undertake to pay all fees, expenses and charges actually
              incurred in relation to my/our application(s), where applicable,
              regardless of the outcome of my/our application(s).
            </p>
            <p>
              9.Agree that approval of the loan(s), where applicable, is subject
              to your discretion and that you reserve the right to decline the
              application(s) without giving any reason.
            </p>
            <p>
              10. Agree to the purposes set out in your Data Protection Policy
              (the link to which is provided below) for the collection, use and
              disclosure of my/our personal data, including authorising you to
              disclose, information, details or data relating to me/us, my/our
              accounts and this application to any other person(s)(whether as
              your service providers, agents, business partners or otherwise)
              including for the purpose of processing this application and
              credit bureau approved or gazetted by The Monetary Authority of
              Singapore of which the Bank is a member or subscriber and/or any
              other credit bureau or agency whether located in Singapore or
              elsewhere or any other member or subscriber of such credit bureau
              or agency and/or any other person to whom disclosure is permitted
              or required by any statutory provision or law. I/We further
              consent to such credit bureau or agency disclosing information
              about me/us to you or its members or subscribers to enable you or
              such members or subscribers to assess my/our credit worthiness as
              a borrower or to law. I/We further consent to you carrying out
              credit bureau searches during the tenure of the loan. The consent
              in paragraph 9 shall be in addition to and shall not be in any way
              prejudiced or affected by any other agreement, expressed or
              implied, between me/us and you.
            </p>
            <p>
              11. Agree to abide by the prevailing terms and conditions
              governing Internet Banking Services, the use of the Bank’s ATM
              Cards, Phonebanking Services and/or such other electronic services
              made available by you from time to time which are applicable to
              my/our accounts) including any amendments) that the Bank may from
              time to time impose, a copy of which is made available at the
              Bank's branches in Singapore and www.maybank2u.com.sg, which I/we
              acknowledge to have read and understood.
            </p>
            <p>
              12. Confirm that I am/we are the sole Beneficial Owner(s) of the
              loan account(s). Beneficial Owner includes (i) in the case of a
              natural person, one who ultimately owns or controls the account
              (ii) the person on whose behalf the transaction is being
              conducted, or (iii) the person who exercises ultimate effective
              control in the case of corporate or unincorporated bodies. I/We
              further acknowledge that in the event I am not a Beneficial Owner
              of the loan account, the Bank will be informed immediately.
            </p>
            <p>
              13. Confirm that none of my/our spouse(s), dependent(s) of my/our
              spouse(s), my/our children, spouse(s) of my/our children, my/our
              parent(s), my/our sibling(s) and/or spouse(s) of my/our sibling(s)
              is/are employees(s)/ director(s) of Malayan Banking Berhad,
              Maybank Singapore Limited or Malayan Banking Group, and none of
              my/our guarantor(s) is/are employee(s)/ director(s), or spouse(s),
              dependent(s) of the spouse(s), children, spouse(s) of the
              children(s), parent(s), sibling(s) and/or spouse(s) of the
              sibling(s) of the employee(s)/ director(s) of Malayan Banking
              Berhad, Maybank Singapore Limited or Malayan Banking Group.
            </p>
            <p>
              14. Confirm that I/we will open and maintain a Maybank
              Savings/Current account for the purpose of servicing the monthly
              instalments and all other sums due and owing upon approval of the
              loan application.
            </p>
            <p className="mb-025">
              15. By providing the information in this application form (and any
              other information that I/we may provide to you from time to time
              in connection with Maybank product and services) :
            </p>
            <p className="mb-025">
              I/We agree and consent to Maybank Singapore Limited and its
              related corporations (collectively, “Maybank”) collecting, using,
              disclosing personal data, and disclosing such personal data to
              Maybank’s authorised service providers and relevant third parties
              for purposes reasonably required by Maybank to process the
              Applicant(s)’ my/our personal data, the www.maybank2u.com.sg
              products or services provided the Applicant(s) is/are applying
              for, as well as the purposes set out in Maybank Singapore’s Data
              Protection Policy, which is accessible at www.maybank2u.com.sg or
              which may be provided to me/us upon request. I/We confirm I/we
              have read and understood the Data Protection Policy.
            </p>
            <p>
              If I/we should withdraw my/our consent to the processing or
              handling of my/our personal data for any purpose related to that
              in respect of any purpose which Maybank considers necessary for
              Maybank to provide me/us with the products and/or services applied
              for, Maybank shall be entitled to treat the Applicant(s)’ facility
              as having been terminated by the Applicant(s) without prejudice to
              any rights and remedies which it may have at law against me/us.
            </p>
          </div>
        </div>
        <div className="signature">
          <div className="top mb-05">
            <div>
              <input type="text" />
              <label>Signature of Main Applicant/Date</label>
            </div>
            <div>
              <input type="text" />
              <label>Signature of Join Applicant or Gurantor/Date</label>
            </div>
          </div>
          <div className="bottom mb-05">
            <div>
              <label>Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Name</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="title">
          <h2>A. Documents To Be Submitted</h2>
        </div>
        <div className="documents">
          <div className="left">
            <div className="photocopy mb-025">
              <input type="checkbox" />
              <label>
                Photocopy of NRIC/Passport for all applicants, owners and
                guarantors
              </label>
            </div>
            <div className="income mb-025">
              <div>
                <input type="checkbox" />
                <label>Income Documents</label>
              </div>
              <div className="cb-group">
                <div className="mb-025">
                  <input type="checkbox" />
                  <label>Latest computerised pay slip</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <div className="col">
                    <label>Latest Income Tax Notice of Assessment</label>
                    <label>
                      (Last 2 years' Income Tax Notice of Assessment if
                      self-employed/commission-based)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="cpf">
              <p className="mb-025">
                You can now print your Notices of Assessment at myTax Portal
                with your SingPass or IRAS PIN. The service is free. Log on to
                http://mytax.iras.gov.sg
              </p>
              <div className="mb-025">
                <input type="checkbox" />
                <label>
                  Latest CPF Statement of Account (if there is utilisation of
                  CPF)
                </label>
              </div>
              <div>
                <input type="checkbox" />
                <label>
                  Current tenancy agreement (if property is used for investment
                  purpose)
                </label>
              </div>
            </div>
          </div>
          <div className="right">
            <h4 className="mb-05">
              Home Loan/Commercial and Industrial Property Loan
            </h4>
            <h4 className="mb-025">New Purchase</h4>
            <div className="option mb-025">
              <input type="checkbox" />
              <label>Option to Purchase/Sale and Purchase Agreement</label>
            </div>
            <div className="bridging-loan mb-025">
              <h4 className="mb-025">With Bridging Loan</h4>
              <div className="mb-025">
                <input type="checkbox" />
                <label>Option for sale of property</label>
              </div>
              <div className="mb-025">
                <input type="checkbox" />
                <label>
                  Loan account statement from existing bank/HDB for the past 6
                  months
                </label>
              </div>
              <div className="mb-025">
                <input type="checkbox" />
                <label>
                  Latest CPF Withdrawal Statement for property to be sold (If
                  there is utilisation of CPF)
                </label>
              </div>
            </div>
            <div className="refinancing-loan">
              <h4 className="mb-025">Refinancing</h4>
              <div className="mb-025">
                <input type="checkbox" />
                <label>
                  Loan account statement from existing Bank/HDB for the past 6
                  months
                </label>
              </div>
              <div className="mb-025">
                <input type="checkbox" />
                <label>
                  Latest CPF Withdrawal Statement for property to be refinanced
                  (if there is utilisation of CPF)
                </label>
              </div>
              <div></div>
            </div>
            <div className="construction-loan">
              <h4 className="mb-025">Construction Loan</h4>
              <div className="mb-025">
                <input type="checkbox" />
                <label>Detailed contractor's quotation</label>
              </div>
              <div className="mb-025">
                <input type="checkbox" />
                <label>
                  Latest CPF Withdrawal Statement for property to be constructed
                  (if there is utilisation of CPF)
                </label>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="footer">
          <h4>MSL-179-0324 (3/4)</h4>
          <h4>Maybank Singapore Limited (UEN: 201804195C)</h4>
        </div>
      </div>
      {/* page 4 */}
      <div className="page four">
        <div className="title">
          <h2>B. For Bank Use Only</h2>
        </div>
        <div className="package">
          <div className="mb-05">
            <h4>Package Indicator (1)</h4>
            <input type="text" />
            <label>(2)</label>
            <input type="text" />
          </div>
          <div className="confirmation mb-05">
            <label>
              Confirmation of proposed loan is a non-staff/director related
              application
            </label>
            <div>
              <input type="checkbox" />
              <label>Yes</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>No</label>
            </div>
          </div>
          <h4 className=" mb-05">Valuation</h4>
          <div className="internal mb-05">
            <div>
              <input type="checkbox" />
              <label>Internal</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>External</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>HDB assigned valuer</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Other</label>
              <input type="text" />
            </div>
          </div>
          <div className="dated mb-05">
            <label>Dated</label>
            <input type="text" />
            <label>Name of valuer</label>
            <input type="text" />
            <label>Name of Company (if applicable)</label>
            <input type="text" />
          </div>
          <div className="dated mb-05">
            <label>EMV: S$</label>
            <input type="text" />
            <label>FSV: S$</label>
            <input type="text" />
            <label>FIV: S$</label>
            <input type="text" />
          </div>
          <h4 className="mb-05">Spousal Consent required Y/N</h4>
          <div className="applicant mb-05">
            <div>
              <input type="checkbox" />
              <label>Main Applicant</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Joint Applicant</label>
            </div>
            <div>
              <input type="checkbox" />
              <label>Property Registered Owner/</label>
            </div>
          </div>
        </div>
        <div className="remarks mb-05">
          <h4 className="mb-05">Remarks/Recommendations</h4>
          <div className="space"></div>
        </div>
        <div className="bottom-signs">
          <div className="left">
            <h4 className="mb-05">Prepared by</h4>
            <div className="mb-05">
              <input type="text" />
              <label>Signature of Staff/Date</label>
            </div>
            <div className="flex">
              <label>Staff Name</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label>Branch</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label>PF No.</label>
              <input type="text" />
              <label>Contact No.</label>
              <input type="text" />
            </div>
          </div>
          <div className="right">
            <h4 className="mb-05">Reviewed by</h4>
            <div className="mb-05">
              <input type="text" />
              <label>Signature of Staff/Date</label>
            </div>
            <div className="flex">
              <label>Staff Name</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label>Branch</label>
              <input type="text" />
            </div>
            <div className="flex">
              <label>PF No.</label>
              <input type="text" />
              <label>Contact No.</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="footer">
          <h4>MSL-179-0324 (4/4)</h4>
          <h4>Maybank Singapore Limited (UEN: 201804195C)</h4>
        </div>
      </div>
    </>
  );
}

export default MAYBANK;
