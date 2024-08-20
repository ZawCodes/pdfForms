import FormInput from "../../components/ui/FormInput/FormInput";
import "./uob.css";

const UOB = () => {
	return (
		<div className="page" style={{ height: "auto" }}>
			{/* fix height later */}
			<div className="u-paragraph">
				<p className="u-text">
					If you wish to have a free credit report, you may obtain it within 30
					calendar days from the date of approval or rejection of this
					application via the credit bureau website listed below. Alternatively,
					you may bring the approval or rejection letter and your NRIC to the
					following credit bureau’s registered office to obtain a free credit
					report.
				</p>
				<p className="u-text">
					Credit Bureau (Singapore) Pte Ltd /{" "}
					<a
						href="https://www.creditbureau.com.sg"
						target="_blank"
						rel="noopener noreferrer"
					>
						www.creditbureau.com.sg
					</a>{" "}
					/ 2 Shenton Way #20-02 SGX Centre 1 Singapore 068804 / Tel: (65) 6565
					6363
				</p>
			</div>

			<div className="form-container">
				<h2>PERSONAL DATA</h2>
				<div className="applicant-section">
					<div className="applicant">
						<table className="applicant-form" border={"2"}>
							<tbody>
								{/* first row */}
								<tr>
									<td colSpan={"3"}>
										<h3>MAIN APPLICANT</h3>
										<div className="form-group">
											<div className="inline-group">
												<label>Full name as in NRIC/Passport</label>
												<label>
													Mr{" "}
													<input type="checkbox" name="titleMain" value="Mr" />
												</label>
												<label>
													Ms{" "}
													<input type="checkbox" name="titleMain" value="Ms" />
												</label>
												<label>
													Mdm{" "}
													<input type="checkbox" name="titleMain" value="Mdm" />
												</label>
												<label>
													Dr{" "}
													<input type="checkbox" name="titleMain" value="Dr" />
												</label>
												<span>(underline surname)</span>
											</div>
										</div>
									</td>
								</tr>

								{/* Second Row */}
								<tr>
									<td>
										<div className="form-group">
											<table>
												<tr>
													<FormInput label={"NRIC/Passport No."} />
												</tr>
												<tr>
													<FormInput label={"Passport Expiry Date:"} />
												</tr>
											</table>
										</div>
									</td>

									<td>
										<div className="form-group">
											<table>
												<tr>
													<label>Date Of Birth</label>
												</tr>
												<tr>
													<input type="text" />
												</tr>
											</table>
										</div>
									</td>
									<td>
										<div className="form-group">
											<table>
												<tr>
													<label>Gender</label>
												</tr>
												<tr>
													<div className="inline-group">
														<label>
															Male{" "}
															<input
																type="checkbox"
																name="titleMain"
																value="Mr"
															/>
														</label>
														<label>
															Female{" "}
															<input
																type="checkbox"
																name="titleMain"
																value="Ms"
															/>
														</label>
													</div>
												</tr>
											</table>
										</div>
									</td>
								</tr>

								{/* Third Row */}
								<tr>
									<td colSpan={"3"}>
										<div className="">
											<table>
												<tr>
													<label>Nationality</label>
													<div className="inline-group">
														<label>
															<input
																type="checkbox"
																name="nationalityMain"
																value="Singaporean"
															/>{" "}
															Singaporean
														</label>
														<label>
															<input
																type="checkbox"
																name="nationalityMain"
																value="SPR"
															/>{" "}
															SPR
														</label>
														<label>
															Other <input type="text" name="titleMain" />
														</label>
													</div>
												</tr>
												<tr>
													<div className="inline-group">
														<label>Other Nationality</label>
														<label>
															<input
																type="checkbox"
																name="nationalityMain"
																value="Singaporean"
															/>{" "}
															Y /
														</label>
														<label>
															<input
																type="checkbox"
																name="nationalityMain"
																value="SPR"
															/>{" "}
															N
														</label>
													</div>
												</tr>

												<tr>
													<label>If Yes, please specify,</label>
													<div className="form-group">
														<table
															style={{ width: "100%", paddingLeft: "20px" }}
														>
															<tr>
																<FormInput label={"Other Nationalities:"} />
															</tr>
															<tr>
																<FormInput
																	label={"Additional Passport(s) No(s).:"}
																/>
															</tr>
															<tr>
																<FormInput
																	label={
																		"Additional Passport(s) Expiry Date(s):"
																	}
																/>
															</tr>
															<tr>
																<FormInput
																	label={"Passport(s) Issuing Country(ies):"}
																/>
															</tr>
														</table>
													</div>
												</tr>
											</table>
										</div>
									</td>
								</tr>

								{/* 4th Row */}
								<tr>
									<td colSpan={"3"}>
										<div className="inline-group">
											<label>Country of Residence</label>
											<label>
												<input
													type="checkbox"
													name="nationalityMain"
													value="Singaporean"
												/>{" "}
												Singapore
											</label>
											<label>
												<input
													type="checkbox"
													name="nationalityMain"
													value="SPR"
												/>{" "}
												Others
											</label>
										</div>
									</td>
								</tr>

								{/* 5th Row */}
								<tr>
									<td colSpan={"3"}>
										{" "}
										<div className="inline-group">
											<label>Marital Status</label>
											<label>
												<input
													type="checkbox"
													name="nationalityMain"
													value="Singaporean"
												/>{" "}
												Single
											</label>
											<label>
												<input
													type="checkbox"
													name="nationalityMain"
													value="SPR"
												/>{" "}
												Married
											</label>
											<label>
												<input
													type="checkbox"
													name="nationalityMain"
													value="SPR"
												/>{" "}
												Divorced
											</label>
										</div>
									</td>
								</tr>

								{/* 6th Row */}
								<tr>
									<td colSpan={"1"}>
										<FormInput label={"No. of Dependent(s)"} />
									</td>
									<td colSpan={"2"}>
										<FormInput label={"Race"} />
									</td>
								</tr>

								{/* 7th row */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<label>Highest Qualiﬁcations Attained</label>
											<div className="inline-group">
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													University/Post Grad
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Diploma
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />A
													Level
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />O
													Level
												</label>
												<label>
													{/* <input type="checkbox" name="titleMain" value="Ms" /> */}
													Others
													<input type="text" />
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 8th Row */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<label>Contact No.</label>
											<div className="inline-group">
												<label style={{ width: "30%" }}>
													(HP)
													<input type="text" style={{ width: "30%" }} />
												</label>
												<label style={{ width: "30%" }}>
													(0)
													<input type="text" style={{ width: "30%" }} />
												</label>
												<label style={{ width: "30%" }}>
													(H)
													<input type="text" style={{ width: "30%" }} />
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 9th Row */}
								<tr>
									<td colSpan={"3"}>
										<FormInput label={"Email"} />
									</td>
								</tr>

								{/* 10th Row */}
								<tr>
									<td colSpan={"3"}>
										<label style={{ width: "100%" }}>
											Home Address
											<input type="text" />
										</label>
									</td>
								</tr>

								{/* 11th */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<div className="inline-group">
												<label>Residence</label>
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													Owned
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Mortgaged
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />A
													Parent’s or Relative’s
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Rented
												</label>
												<label style={{ width: "30%" }}>
													{/* <input type="checkbox" name="titleMain" value="Ms" /> */}
													S$
													<input type="text" style={{ width: "50%" }} />
													pm
												</label>
												<input type="checkbox" name="titleMain" value="Ms" />
												<label style={{ width: "30%" }}>
													Others
													<input type="text" style={{ width: "100%" }} />
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 12th */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<div className="inline-group">
												<label>Residence Type</label>
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													Bungalow
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Semi-D
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />A
													Terrace
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Maisonette/Town house
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Pte Apt / Condo
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Exec Condo / HUDC
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													HDB
												</label>

												<input type="checkbox" name="titleMain" value="Ms" />
												<label style={{ width: "30%" }}>
													Others
													<input type="text" style={{ width: "100%" }} />
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 13th Row */}
								<tr>
									<td colSpan={"3"}>
										<div></div>
										<label style={{ width: "100%" }}>
											Correspondence Address (if diferent from above)
											<input type="text" />
										</label>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					<div className="applicant">
						{/* Repeat similar form structure as MAIN APPLICANT */}
						<table className="applicant-form" border={"2"}>
							<tbody>
								{/* first row */}
								<tr>
									<td colSpan={"3"}>
										<h3>JOINT APPLICANT</h3>
										<div className="form-group">
											<div className="inline-group">
												<label>Full name as in NRIC/Passport</label>
												<label>
													Mr{" "}
													<input type="checkbox" name="titleMain" value="Mr" />
												</label>
												<label>
													Ms{" "}
													<input type="checkbox" name="titleMain" value="Ms" />
												</label>
												<label>
													Mdm{" "}
													<input type="checkbox" name="titleMain" value="Mdm" />
												</label>
												<label>
													Dr{" "}
													<input type="checkbox" name="titleMain" value="Dr" />
												</label>
												<span>(underline surname)</span>
											</div>
										</div>
									</td>
								</tr>

								{/* Second Row */}
								<tr>
									<td>
										<div className="form-group">
											<table>
												<tr>
													<FormInput label={"NRIC/Passport No."} />
												</tr>
												<tr>
													<FormInput label={"Passport Expiry Date:"} />
												</tr>
											</table>
										</div>
									</td>

									<td>
										<div className="form-group">
											<table>
												<tr>
													<label>Date Of Birth</label>
												</tr>
												<tr>
													<input type="text" />
												</tr>
											</table>
										</div>
									</td>
									<td>
										<div className="form-group">
											<table>
												<tr>
													<label>Gender</label>
												</tr>
												<tr>
													<div className="inline-group">
														<label>
															Male{" "}
															<input
																type="checkbox"
																name="titleMain"
																value="Mr"
															/>
														</label>
														<label>
															Female{" "}
															<input
																type="checkbox"
																name="titleMain"
																value="Ms"
															/>
														</label>
													</div>
												</tr>
											</table>
										</div>
									</td>
								</tr>

								{/* Third Row */}
								<tr>
									<td colSpan={"3"}>
										<div className="">
											<table>
												<tr>
													<label>Nationality</label>
													<div className="inline-group">
														<label>
															<input
																type="checkbox"
																name="nationalityMain"
																value="Singaporean"
															/>{" "}
															Singaporean
														</label>
														<label>
															<input
																type="checkbox"
																name="nationalityMain"
																value="SPR"
															/>{" "}
															SPR
														</label>
														<label>
															Other <input type="text" name="titleMain" />
														</label>
													</div>
												</tr>
												<tr>
													<div className="inline-group">
														<label>Other Nationality</label>
														<label>
															<input
																type="checkbox"
																name="nationalityMain"
																value="Singaporean"
															/>{" "}
															Y /
														</label>
														<label>
															<input
																type="checkbox"
																name="nationalityMain"
																value="SPR"
															/>{" "}
															N
														</label>
													</div>
												</tr>

												<tr>
													<label>If Yes, please specify,</label>
													<div className="form-group">
														<table
															style={{ width: "100%", paddingLeft: "20px" }}
														>
															<tr>
																<FormInput label={"Other Nationalities:"} />
															</tr>
															<tr>
																<FormInput
																	label={"Additional Passport(s) No(s).:"}
																/>
															</tr>
															<tr>
																<FormInput
																	label={
																		"Additional Passport(s) Expiry Date(s):"
																	}
																/>
															</tr>
															<tr>
																<FormInput
																	label={"Passport(s) Issuing Country(ies):"}
																/>
															</tr>
														</table>
													</div>
												</tr>
											</table>
										</div>
									</td>
								</tr>

								{/* 4th Row */}
								<tr>
									<td colSpan={"3"}>
										<div className="inline-group">
											<label>Country of Residence</label>
											<label>
												<input
													type="checkbox"
													name="nationalityMain"
													value="Singaporean"
												/>{" "}
												Singapore
											</label>
											<label>
												<input
													type="checkbox"
													name="nationalityMain"
													value="SPR"
												/>{" "}
												Others
											</label>
										</div>
									</td>
								</tr>

								{/* 5th Row */}
								<tr>
									<td colSpan={"3"}>
										{" "}
										<div className="inline-group">
											<label>Marital Status</label>
											<label>
												<input
													type="checkbox"
													name="nationalityMain"
													value="Singaporean"
												/>{" "}
												Single
											</label>
											<label>
												<input
													type="checkbox"
													name="nationalityMain"
													value="SPR"
												/>{" "}
												Married
											</label>
											<label>
												<input
													type="checkbox"
													name="nationalityMain"
													value="SPR"
												/>{" "}
												Divorced
											</label>
										</div>
									</td>
								</tr>

								{/* 6th Row */}
								<tr>
									<td colSpan={"1"}>
										<FormInput label={"No. of Dependent(s)"} />
									</td>
									<td colSpan={"2"}>
										<FormInput label={"Race"} />
									</td>
								</tr>

								{/* 7th row */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<label>Highest Qualiﬁcations Attained</label>
											<div className="inline-group">
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													University/Post Grad
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Diploma
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />A
													Level
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />O
													Level
												</label>
												<label>
													{/* <input type="checkbox" name="titleMain" value="Ms" /> */}
													Others
													<input type="text" />
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 8th Row */}
								<tr>
									<td colSpan={"3"}>
										<FormInput label={"Relationship to Main Applicant:"} />
									</td>
								</tr>

								{/* 9th row */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<label>Contact No.</label>
											<div className="inline-group">
												<label style={{ width: "30%" }}>
													(HP)
													<input type="text" style={{ width: "30%" }} />
												</label>
												<label style={{ width: "30%" }}>
													(0)
													<input type="text" style={{ width: "30%" }} />
												</label>
												<label style={{ width: "30%" }}>
													(H)
													<input type="text" style={{ width: "30%" }} />
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 10th Row */}
								<tr>
									<td colSpan={"3"}>
										<FormInput label={"Email"} />
									</td>
								</tr>

								{/* 11th Row */}
								<tr>
									<td colSpan={"3"}>
										<label style={{ width: "100%" }}>
											Home Address
											<input type="text" />
										</label>
									</td>
								</tr>

								{/* 12th */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<div className="inline-group">
												<label>Residence</label>
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													Owned
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Mortgaged
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />A
													Parent’s or Relative’s
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Rented
												</label>
												<label style={{ width: "30%" }}>
													{/* <input type="checkbox" name="titleMain" value="Ms" /> */}
													S$
													<input type="text" style={{ width: "50%" }} />
													pm
												</label>
												<input type="checkbox" name="titleMain" value="Ms" />
												<label style={{ width: "30%" }}>
													Others
													<input type="text" style={{ width: "100%" }} />
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 13th */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<div className="inline-group">
												<label>Residence Type</label>
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													Bungalow
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Semi-D
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />A
													Terrace
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Maisonette/Town house
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Pte Apt / Condo
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													Exec Condo / HUDC
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Ms" />
													HDB
												</label>

												<input type="checkbox" name="titleMain" value="Ms" />
												<label style={{ width: "30%" }}>
													Others
													<input type="text" style={{ width: "100%" }} />
												</label>
											</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			{/* Employment data */}
			<div className="form-container">
				<h2>EMPLOYMENT DATA</h2>
				<div className="applicant-section">
					{/* Left */}
					<div className="applicant">
						<table className="applicant-form" border={"2"}>
							<tbody>
								{/* first row */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<div className="inline-group">
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													Employee
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													Self-Employed
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													Sales / Commission Earner
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													Others
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 2nd row */}
								<tr>
									<td colSpan={"3"}>
										<label style={{ width: "100%" }}>
											Name of Employer / Business
											<input type="text" />
										</label>
									</td>
								</tr>

								{/* 3rd row */}
								<tr>
									<td colSpan={"1"}>
										<FormInput label={"Type of Business"} />
									</td>
									<td colSpan={"2"}>
										<div className="form-group">
											<div className="inline-group">
												<label style={{ width: "30%" }}>
													Length of Service
												</label>
												<label style={{ width: "30%" }}>
													<input type="text" style={{ width: "30%" }} />
													Yr(s) /
												</label>
												<label style={{ width: "30%" }}>
													<input type="text" style={{ width: "30%" }} />
													Mth(s)
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 4th row */}
								<tr>
									<td colSpan={"1"}>
										<FormInput label={"Occupation"} />
									</td>
									<td colSpan={"2"}>
										<div className="form-group">
											<label>% of Shareholdings:</label>
											<div className="inline-group">
												<label style={{ width: "30%" }}>
													<input type="checkbox" style={{ width: "30%" }} />
													≥25%
												</label>
												<label style={{ width: "30%" }}>
													<input type="checkbox" style={{ width: "30%" }} />
													{"<25%"}
												</label>
												<label style={{ width: "30%" }}>
													<input type="checkbox" style={{ width: "30%" }} />
													Not Applicable
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 5th row */}
								<tr>
									<td>
										<div className="form-group">
											<table>
												<tr>
													<label>Mthly Basic/Fixed Income</label>
												</tr>
												<tr>
													<input type="text" />
												</tr>
											</table>
										</div>
									</td>
									<td>
										<div className="form-group">
											<table>
												<tr>
													<label>Mthly Variable/Trade/Rental Income</label>
												</tr>
												<tr>
													<input type="text" />
												</tr>
											</table>
										</div>
									</td>
									<td>
										<div className="form-group">
											<table>
												<tr>
													<label>Eligible Financial Assets (Income)</label>
												</tr>
												<tr>
													<input type="text" />
												</tr>
											</table>
										</div>
									</td>
								</tr>

								{/* 6th */}
								<tr>
									<td colSpan={"3"}>
										<label style={{ width: "100%" }}>
											Name of Previous Employer / Business (if less than 3 years
											with current employer)
											<input type="text" />
										</label>
									</td>
								</tr>

								{/* 7th row */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<div className="inline-group">
												<label style={{ width: "30%" }}>
													Length of Service with Previous Employer
												</label>
												<label style={{ width: "30%" }}>
													<input type="text" style={{ width: "30%" }} />
													Yr(s) /
												</label>
												<label style={{ width: "30%" }}>
													<input type="text" style={{ width: "30%" }} />
													Mth(s)
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 8th row */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<table>
												<tr>
													<FormInput
														label={"Occupation with Previous Employer:-"}
													/>
												</tr>
												<tr>
													<FormInput label={"Type of Business"} />
												</tr>
											</table>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* Right */}
					<div className="applicant">
						<table className="applicant-form" border={"2"}>
							<tbody>
								{/* first row */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<div className="inline-group">
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													Employee
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													Self-Employed
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													Sales / Commission Earner
												</label>
												<label>
													<input type="checkbox" name="titleMain" value="Mr" />{" "}
													Others
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 2nd row */}
								<tr>
									<td colSpan={"3"}>
										<label style={{ width: "100%" }}>
											Name of Employer / Business
											<input type="text" />
										</label>
									</td>
								</tr>

								{/* 3rd row */}
								<tr>
									<td colSpan={"1"}>
										<FormInput label={"Type of Business"} />
									</td>
									<td colSpan={"2"}>
										<div className="form-group">
											<div className="inline-group">
												<label style={{ width: "30%" }}>
													Length of Service
												</label>
												<label style={{ width: "30%" }}>
													<input type="text" style={{ width: "30%" }} />
													Yr(s) /
												</label>
												<label style={{ width: "30%" }}>
													<input type="text" style={{ width: "30%" }} />
													Mth(s)
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 4th row */}
								<tr>
									<td colSpan={"1"}>
										<FormInput label={"Occupation"} />
									</td>
									<td colSpan={"2"}>
										<div className="form-group">
											<label>% of Shareholdings:</label>
											<div className="inline-group">
												<label style={{ width: "30%" }}>
													<input type="checkbox" style={{ width: "30%" }} />
													≥25%
												</label>
												<label style={{ width: "30%" }}>
													<input type="checkbox" style={{ width: "30%" }} />
													{"<25%"}
												</label>
												<label style={{ width: "30%" }}>
													<input type="checkbox" style={{ width: "30%" }} />
													Not Applicable
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 5th row */}
								<tr>
									<td>
										<div className="form-group">
											<table>
												<tr>
													<label>Mthly Basic/Fixed Income</label>
												</tr>
												<tr>
													<input type="text" />
												</tr>
											</table>
										</div>
									</td>
									<td>
										<div className="form-group">
											<table>
												<tr>
													<label>Mthly Variable/Trade/Rental Income</label>
												</tr>
												<tr>
													<input type="text" />
												</tr>
											</table>
										</div>
									</td>
									<td>
										<div className="form-group">
											<table>
												<tr>
													<label>Eligible Financial Assets (Income)</label>
												</tr>
												<tr>
													<input type="text" />
												</tr>
											</table>
										</div>
									</td>
								</tr>

								{/* 6th */}
								<tr>
									<td colSpan={"3"}>
										<label style={{ width: "100%" }}>
											Name of Previous Employer / Business (if less than 3 years
											with current employer)
											<input type="text" />
										</label>
									</td>
								</tr>

								{/* 7th row */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<div className="inline-group">
												<label style={{ width: "30%" }}>
													Length of Service with Previous Employer
												</label>
												<label style={{ width: "30%" }}>
													<input type="text" style={{ width: "30%" }} />
													Yr(s) /
												</label>
												<label style={{ width: "30%" }}>
													<input type="text" style={{ width: "30%" }} />
													Mth(s)
												</label>
											</div>
										</div>
									</td>
								</tr>

								{/* 8th row */}
								<tr>
									<td colSpan={"3"}>
										<div className="form-group">
											<table>
												<tr>
													<FormInput
														label={"Occupation with Previous Employer:-"}
													/>
												</tr>
												<tr>
													<FormInput label={"Type of Business"} />
												</tr>
											</table>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			{/* SOURCE OF WEALTH */}
			<div className="form-container">
				<h2>SOURCE OF WEALTH</h2>
				<td colSpan={"3"}>
					<div className="form-group">
						<div className="inline-group">
							<label>
								Business Ownership:
								<input type="checkbox" name="titleMain" value="Mr" />
							</label>
							<label>
								Income From Employment:
								<input type="checkbox" name="titleMain" value="Mr" />
							</label>
							<label>
								Inheritance / Gift
								<input type="checkbox" name="titleMain" value="Mr" />
							</label>
							<label>
								Investments:
								<input type="checkbox" name="titleMain" value="Mr" />
							</label>
							<label>
								Others
								<input type="checkbox" name="titleMain" value="Mr" />
							</label>
							<label>
								(Please specify: <input type="text" />)
							</label>
						</div>
					</div>
				</td>
			</div>
		</div>
	);
};

export default UOB;
