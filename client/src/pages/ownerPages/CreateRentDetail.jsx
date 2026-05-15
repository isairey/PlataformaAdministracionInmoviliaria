import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  createRentDetail,
  clearAlert,
} from "../../features/rentDetailOwner/rentDetailOwnerSlice";
import { getOwnerAllLeases } from "../../features/ownerUser/ownerUserSlice";
import { ConfirmModal, PageLoading } from "../../components";
import { Button, CircularProgress, TextField, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { BorderColorRounded, HomeWorkRounded, InfoRounded } from "@mui/icons-material";
import createRentImage from "../../assets/images/createRentImage.svg";
import { calculateAddedDate } from "../../utils/valueFormatter";
import useToast from "../../hooks/useToast";

const CreateRentDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { success, isProcessing, alertFlag, alertMsg, alertType } = useSelector(
    (state) => state.rentDetailOwner
  );

  const { allLeases, isLoading } = useSelector((state) => state.ownerUser);

  useToast({
    alertFlag,
    alertType,
    message: alertMsg,
    clearAlertAction: clearAlert,
  });

  // get all real estate
  useEffect(() => {
    dispatch(getOwnerAllLeases());
  }, [dispatch]);

  const [leaseForm, setLeaseFrom] = useState({
    tenant: "",
    realEstate: "",
    rentAmount: "",
    paymentPlan: "",
    startDate: "",
    tenantName: "",
  });

  // handle change in the form
  const handleChange = useCallback(
    (e) => {
      setLeaseFrom({ ...leaseForm, [e.target.name]: e.target.value });
    },
    [leaseForm]
  );

  // set rent amount to the price of the property when the property is selected
  useEffect(() => {
    if (leaseForm.realEstate) {
      setLeaseFrom({
        ...leaseForm,
        tenant: allLeases?.find(
          (lease) => lease.realEstate._id === leaseForm.realEstate
        ).tenant._id,
        rentAmount: allLeases?.find(
          (lease) => lease.realEstate._id === leaseForm.realEstate
        ).rentAmount,
        startDate: allLeases?.find(
          (lease) => lease.realEstate._id === leaseForm.realEstate
        ).startDate,
        paymentPlan: allLeases?.find(
          (lease) => lease.realEstate._id === leaseForm.realEstate
        ).paymentPlan,
        tenantName: allLeases
          ?.find(
            (lease) => lease.realEstate._id === leaseForm.realEstate
          )
          .tenant.firstName.concat(
            " ",
            allLeases?.find(
              (lease) => lease.realEstate._id === leaseForm.realEstate
            ).tenant.lastName
          ),
      });
    }
  }, [leaseForm.realEstate, allLeases, setLeaseFrom, leaseForm]);

  // Redirect to all rent details page
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        navigate(`/owner/rentDetail`);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [success, navigate]);

  //modal
  const [open, setOpen] = useState(false);
  const handleModalOpen = useCallback(() => setOpen(true), []);
  const handleModalClose = useCallback(() => setOpen(false), []);

  const [formData, setFormData] = useState({});
  const handleConfirmation = (e) => {
    e.preventDefault();
    const { tenant, realEstate, paymentPlan, startDate } = leaseForm;
    setFormData({
      tenant,
      realEstate,
      paymentPlan,
      startDate,
      nextRentDate: {
        from: startDate,
        to: calculateAddedDate(paymentPlan, startDate),
      },
    });

    handleModalOpen();
  };

  const handleCreateRentDetail = useCallback(() => {
    dispatch(createRentDetail({ formData }));
    handleModalClose();
  }, [dispatch, formData, handleModalClose]);

  if (isLoading) return <PageLoading />;

  return (
    <main className="flex flex-col lg:flex-row">
      <div className="mt-10 flex flex-col items-center md:ml-16 md:items-start">
        <div className="mb-6">
          <h3 className="font-heading font-bold">Create Rent Detail</h3>
          <p className="text-gray-400 -mt-2 font-robotoNormal">
            Fill in the form below to create the rent detail
          </p>
        </div>

        <div className="">
          <form id="form" onSubmit={handleConfirmation}>
            <div className="flex flex-col gap-4 justify-center md:justify-start">
              <div className="flex flex-col mb-4 items-center md:items-start w-full">
                <h5 className="text-gray-700 mb-3">
                  <HomeWorkRounded /> Select Your Real Estate
                </h5>
                <TextField
                  select
                  required
                  label="Real Estate"
                  value={leaseForm.realEstate}
                  onChange={handleChange}
                  sx={{ width: "100%" }}
                  name="realEstate"
                  color="tertiary"
                >
                  {allLeases?.map((lease) => (
                    <MenuItem
                      key={lease._id}
                      value={lease.realEstate._id}
                      className=""
                    >
                      {lease.realEstate.title}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div className="flex flex-col items-center md:items-start mb-3">
                <h5 className="text-gray-700 mb-3">
                  <InfoRounded /> Lease Details
                </h5>
                <div className="flex flex-col lg:flex-row  gap-4 justify-center md:justify-start w-full">
                  <TextField
                    label="Tenant"
                    value={leaseForm.tenantName}
                    color="tertiary"
                  />

                  <TextField
                    label="Lease Start Date"
                    value={leaseForm.startDate}
                    name="startDate"
                    color="tertiary"
                  />

                  <TextField
                    label="Payment Plan"
                    value={leaseForm.paymentPlan}
                    name="paymentPlan"
                    color="tertiary"
                  />

                  <TextField
                    label="Rent Amount"
                    value={leaseForm.rentAmount}
                    name="rentAmount"
                    color="tertiary"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-8 mb-6">
              <Button
                disabled={isProcessing}
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
                startIcon={<BorderColorRounded />}
              >
                {isProcessing ? (
                  <CircularProgress
                    size={26}
                    sx={{
                      color: "#fff",
                    }}
                  />
                ) : (
                  "Create"
                )}
              </Button>
            </div>
          </form>
        </div>

        <div>
          <ConfirmModal open={open} handleModalClose={handleModalClose}>
            <h3 className="text-center">Create Rent Detail</h3>
            <p className="text-center my-4">
              Are you sure you want to create this rent detail? You won't be
              able to undo this action. The rent detail can only be deleted by
              the owner when the lease is terminated.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <Button onClick={handleModalClose} color="error">
                Close
              </Button>

              <Button
                onClick={handleCreateRentDetail}
                color="success"
                variant="contained"
              >
                Confirm
              </Button>
            </div>
          </ConfirmModal>
        </div>
      </div>

      <div className="mt-10 mb-6 md:mb-0 mx-14 self-center">
        <img src={createRentImage} alt="" />
      </div>
    </main>
  );
};

export default CreateRentDetail;
