"use client"

import React, { useState } from "react"
import { Card, CardContent, Typography, Button, Chip, Stack, Box, IconButton } from "@mui/material"
import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  ErrorOutline as ErrorOutlineIcon,
  WarningAmber as WarningAmberIcon,
  OpenInNew as OpenInNewIcon,
} from "@mui/icons-material"
import "./Ticket.scss"



export default function SupportTicket({
  id,
  title,
  player,
  reason,
  dateTime,
  initialState = "opened",
}) {
  const [state, setState] = useState(initialState)

  const handleAccept = () => {
    setState("active")
  }

  const getStateColor = (state) => {
    switch (state) {
      case "opened":
        return "success"
      case "closed":
        return "error"
      case "active":
        return "warning"
    }
  }

  const getLocalizedName = (state) => {
    switch (state) {
        case 'opened':
            return "Ouvert";
        case "closed":
            return "Fermé";
        case "active":
            return "Actif";

    }
  }

  const getStateIcon = (state) => {
    switch (state) {
      case "opened":
        return <CheckCircleOutlineIcon />
      case "closed":
        return <ErrorOutlineIcon />
      case "active":
        return <WarningAmberIcon />
    }
  }

  return (
    <Card className="ticket-card">
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6" component="div" color="text.primary" sx={{ fontWeight: "bold" }}>
            Ticket #{id}
          </Typography>
          <Chip
            icon={getStateIcon(state)}
            label={getLocalizedName(state)}
            color={getStateColor(state)}
            size="medium"
            className="ticket-chip"
          />
        </Stack>
        <Typography variant="subtitle1" gutterBottom color="text.primary" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Box className="ticket-info">
          <Typography variant="body2" color="text.secondary">
            <strong>Joueur:</strong> {player}
            <br />
            <strong>Motif:</strong> {reason}
            <br />
            <strong>Date/Heure:</strong> {dateTime}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {state === "opened" && (
            <Button variant="contained" color="primary" onClick={handleAccept} fullWidth>
              Accepter
            </Button>
          )}
          {state !== "opened" && (
            <IconButton
              color="primary"
              aria-label="open ticket details"
              onClick={() => {
                console.log("Open modal for ticket", id)
              }}
              className="open-details-button"
            >
              <OpenInNewIcon />
            </IconButton>
          )}
        </Box>
      </CardContent>
    </Card>
  )
}

